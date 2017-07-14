<template>
    <div id='editor'>
        <div v-if="isPreview" class="preview">
            <h1 class="title">{{title}}</h1>
            <p class="content">{{content}}</p>
            <ul class="imgs">
                <li v-for='(item ,index ) in imgs' :key="item">
                    <img :src="item">
                </li>
            </ul>
        </div>
        <div v-else class="edit">
            <mt-field label="公告标题" placeholder="请输入公告标题" v-model="title"></mt-field>
            <mt-field label="公告内容" placeholder="请输入公告内容（字数300字以内）" v-model="content" type="textarea"
                      rows="8"></mt-field>
            <mt-field label="图片上传" disabled></mt-field>
            <div class="upload">
                <ul class="box">
                    <li v-for='(item ,index ) in imgs' :key="item">
                        <div class="w">
                            <img :src="item">
                            <span @click='delete_img(index)' class="delete">x</span>
                        </div>
                    </li>
                    <li class="add">
                        <input @change='add_img' type="file">
                        <img src="../../../../assets/images/common/general_picture_add_normal.png">
                    </li>
                </ul>
            </div>
        </div>
        <div class="submit" v-if="role_id===3 || isCreater">
            <mt-button v-if="isPreview && isEdited" @click.native="back" size="large" type="primary" plain>返回修改
            </mt-button>
            <mt-button v-if="isEdited && !isPreview" @click.native="preview" size="large" type="primary" plain>预览公告
            </mt-button>
            <mt-button v-if="isEdited && isNew" @click="save" size="large" type="primary">确认提交</mt-button>
            <mt-button v-if="isEdited && !isNew" @click="update" size="large" type="primary">提交修改</mt-button>
            <mt-button v-if="isPreview && !isEdited" @click="edit" size="large" type="primary">修改</mt-button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import {Field, Radio, Toast, MessageBox, Indicator} from 'mint-ui';
  import Store from 'store'
  import _ from 'lodash'
  import axios from 'axios'
  import lrz from 'lrz'
  import API from '../../../../api/API'
  const api = new API()

  Vue.component(Radio.name, Radio);
  Vue.component(Field.name, Field);

  export default {
    beforeMount(){

    },
    data () {
      const {roleId, userId}=this.$store.getters.wx_userInfo;
      const {classId}=this.$store.getters.classGroupInfo;
      if (this.isNew) {
        return {
          notify_id: '',
          class_id: classId,
          user_id: (userId || Store.get('__YYXXAPP_USERID__')),
          role_id: (roleId || Store.get('__YYXXAPP_roleId__')) - 0,
          isPreview: false,
          isEdited: true,
          title: '',
          content: '',
          imgs: [],

        };
      } else {
        const {notifyId, notifyTitle, notifyContent, img1, img2, img3}=this.$store.getters.noticeInfo;
        return {
          notify_id: notifyId,
          class_id: classId,
          user_id: (userId || Store.get('__YYXXAPP_USERID__')),
          role_id: (roleId || Store.get('__YYXXAPP_roleId__')) - 0,
          isPreview: true,
          isEdited: false,
          title: notifyTitle,
          content: notifyContent,
          imgs: _.compact([img1, img2, img3])
        };
      }
    },
    props: ['info', 'isNew', 'isCreater'],
    watch: {
      noticeInfo(val){
        const {notifyId, notifyTitle, notifyContent, img1, img2, img3}=val;
        this.notify_id = notifyId;
        this.title = notifyTitle;
        this.content = notifyContent;
        this.imgs = _.compact([img1, img2, img3]);

      }
    },
    computed: mapGetters({
      noticeInfo: 'noticeInfo'
    }),
    components: {},
    methods: {
      transformImg(){
        const arr = [];
        _.compact(this.imgs).map(item => {
          arr.push({'imgPath': item})
        })
        return arr;
      },
      save(){
        const param = {
          userId: this.user_id,
          classId: this.class_id,
          notifyContent: this.content,
          notifyTitle: this.title,
          images: this.transformImg()
        };
        api.saveNotice(param).then((resp) => {
          if (resp.data.code === 'YYXX/REQUIRE_SUCCESS') {
            Toast({
              message: '提交成功',
              iconClass: 'mintui mintui-success',
              duration: 1000
            });
            setTimeout(_.bind(function () {
              this.$router.go(-1)
            }, this), 1200)
          } else {
            MessageBox.alert(resp.data.msg)
          }
        })
      },
      update(){
        const param = {
          userId: this.user_id,
          classId: this.class_id,
          notifyContent: this.content,
          notifyTitle: this.title,
          notifyId: this.notify_id,
          images: this.transformImg()
        };
        api.editNotice(param).then((resp) => {
          if (resp.data.code === 'YYXX/REQUIRE_SUCCESS') {
            Toast({
              message: '提交成功',
              iconClass: 'mintui mintui-success',
              duration: 1000
            });
            setTimeout(_.bind(function () {
              this.$router.go(-1)
            }, this), 1200)
          } else {
            MessageBox.alert(resp.data.msg)
          }
        })
      },
      edit(){
        this.isEdited = true;
        this.isPreview = false;
      },
      back(){
        this.isPreview = false;
      },
      preview(){
        this.isPreview = true;
      },
      delete_img(item){
        this.imgs.splice(item, 1);
      },
      add_img(event){
        var img = event.target.files[0];
        if (this.imgs.length === 3) {
          Toast({
            position: 'bottom',
            message: '只能上传3张照片哦',
          });
          return;
        }
        lrz(img)
          .then((rst) => {
            var fd = new FormData();
            fd.append('file', rst.file);
            Indicator.open({spinnerType: 'fading-circle'});
            axios.post('http://www.yyxx100.com/yyxx/utils/uploadImg?userId=' + this.user_id, fd).then(resp => {
              if (resp.data.code === 'YYXX/REQUIRE_SUCCESS') {
                const imgPath = resp.data.data.imgPath;
                this.imgs.push(imgPath)
              } else {
                MessageBox.alert(resp.data.msg)
              }
              Indicator.close()
            })
          })
          .catch(function (err) {
            alert(err)
            Indicator.close()
          })
      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../../assets/css/vars.scss';
    @import '../../../../assets/css/function.scss';

    #editor {
        background-color: #fff;
        .upload {
            padding-left: 115px;
            margin-top: -30px;
            position: relative;
            z-index: 0;
            ul.box {
                overflow: hidden;
                li {
                    float: left;
                    width: px2em(180px);
                    height: px2em(180px);
                    margin-right: px2em(18px);
                    margin-bottom: px2em(18px);
                    position: relative;
                    border-radius: px2em(4px);
                    border: 0;
                    text-align: center;
                    background-color: #f2f2f2;
                    .w {
                        display: table-cell;
                        vertical-align: middle;
                        text-align: center;
                        width: px2em(180px);
                        height: px2em(180px);
                        .delete {
                            position: absolute;
                            right: px2em(8px);
                            top: px2em(8px);
                            width: px2em(32px);
                            height: px2em(32px);
                            line-height: px2em(32px);
                            color: #fff;
                            border-radius: 999px;
                            @include font-dpr(18px);
                            background-color: rgba(0, 0, 0, .3);
                        }
                    }
                    img {
                        vertical-align: middle;
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
                li.add {
                    background-color: #fff;
                    input {
                        position: absolute;
                        opacity: 0;
                        width: 100%;
                        height: 100%;

                    }
                }
            }
        }
        .preview {
            background-color: #fff;
            padding: px2em(20px);
            .title {
                @include font-dpr(18px);
                border-bottom: px2em(1px) solid #ddd;
                line-height: 1.5;
                padding-bottom: px2em(5px);
            }
            .content {
                padding: px2em(20px) 0;
                line-height: 1.8;
                text-indent: 2em;
                color: #666;
                @include font-dpr(16px)
            }
            .imgs {
                text-align: center;
                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }
        .submit {
            background-color: #fff;
            padding-bottom: px2em(40px);
            .mint-button {
                margin-bottom: px2em(20px);
            }
        }
    }

</style>
