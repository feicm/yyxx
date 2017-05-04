<template>
    <div id='editor'>
        <div v-if="isPreview" class="preview">
            <h1 class="title">{{title}}</h1>
            <p class="content">{{content}}</p>
            <ul class="imgs">
                <li v-for='(item ,index ) in imgs'>
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
                    <li v-for='(item ,index ) in imgs'>
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
        <div class="submit">
            <mt-button v-if="isPreview" @click.native="back" size="large" type="primary" plain>返回修改</mt-button>
            <mt-button v-else @click.native="preview" size="large" type="primary" plain>预览公告</mt-button>
            <mt-button @click.native="submit" size="large" type="primary">确认提交</mt-button>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Field, Radio, Toast} from 'mint-ui';
  Vue.component(Radio.name, Radio);
  Vue.component(Field.name, Field);

  export default {
    beforeMount(){

    },
    data () {
      return {
        isPreview: false,
        title: '碧桃放辣椒时代雷锋精神了福利时间啊浪费 副撒了',
        content: '内容拉萨附近老师都放假啦睡觉发拉萨附近阿里司法解释了发拉萨福建省副撒了',
        imgs: [],
      };
    },
    created(){

    },
    components: {},
    methods: {
      back(){
        this.isPreview=false;
      },
      preview(){
        this.isPreview=true;
      },
      delete_img(item){
        this.imgs.splice(item, 1);
      },
      add_img(event){
        var reader = new FileReader();
        var img1 = event.target.files[0];
        if (this.imgs.length === 3) {
          Toast({
            position: 'bottom',
            message: '只能上传3张照片哦',
          });
          return;
        }
        reader.readAsDataURL(img1);
        var that = this;
        reader.onloadend = function () {
          that.imgs.push(reader.result)
        }

      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../../assets/css/vars.scss';
    @import '../../../../assets/css/function.scss';

    #editor {
        .upload {
            padding-left: 115px;
            margin-top: -30px;
            position: relative;
            z-index: 11111;
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
        .preview{
            background-color: #fff;
            padding: px2em(20px);
            .title{
                @include font-dpr(18px);
                border-bottom: px2em(1px) solid #ddd;
                line-height: 1.5;
                padding-bottom: px2em(5px);
            }
            .content{
                padding:px2em(20px) 0;
                line-height: 1.8;
                text-indent: 2em;
                color:#666;
                @include font-dpr(16px)
            }
            .imgs{
                text-align: center;
                img{
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }
        .submit {
            margin: px2em(40px) px2em(35px);
            .mint-button {
                margin-bottom: px2em(20px);
            }
        }
    }

</style>
