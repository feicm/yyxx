<template>
    <div id='cgJoin'>
        <Topbar :isback="true" :title="'加入班群'"></Topbar>
        <div class="img">
            <img src="../../../assets/images/view/class_group_top_icon_establish.png">
        </div>
        <mt-field v-if="role_id===2" label="学生姓名" placeholder="请输入学生姓名" :state="studentNameState"
                  type="text" v-model="student_name">
        </mt-field>
        <mt-field label="班群ID" placeholder="请输入班群ID" :state="classIdState" type="text" v-model="class_id">
        </mt-field>
        <mt-field v-if="role_id===1 || role_id===2" label="学生座位号" placeholder="请输入学生座位号" type="number"
                  :state="placeIdState" v-model="place_id">
        </mt-field>
        <div class="submit">
            <mt-button v-if="actived" @click="submit" size="large" type="primary">加入</mt-button>
            <mt-button v-else @click.native="submit" size="large" type="primary" disabled>加入</mt-button>
        </div>
    </div>
</template>

<script type="text/ecmascript">
  import Vue from 'vue'
  import Topbar from '../../topbar/Main.vue';
  import {Cell, Field, MessageBox, Toast,Indicator} from 'mint-ui';
  import Store from 'store';
  import _ from 'lodash';
  import API from '../../../api/API'
  const api = new API()
  Vue.component(Cell.name, Cell);
  Vue.component(Field.name, Field);

  export default {
    beforeMount(){
      Indicator.close()
      //未认证，提示并跳转到认证页面，已认证，身份：学生or家长——default view ，老师——用户名，无座位号
      if (!Store.get('__YYXXAPP_isAuth__')) {
        MessageBox.alert('请先完成身份认证!').then(action => {
          this.$router.push('/user/attestation')
        });
      }
    },
    data () {
      const {userId, roleId, userName, isAuth}=this.$store.getters.wx_userInfo;
      return {
        user_id: userId || Store.get('__YYXXAPP_USERID__'),
        student_name: '',
        class_id: '',
        place_id: '',
        studentNameState: '',
        classIdState: '',
        placeIdState: '',
        isAuth: isAuth || Store.get('__YYXXAPP_isAuth__'),
        role_id: (roleId || Store.get('__YYXXAPP_roleId__')) - 0,
        actived: false
      }
    },
    watch: {
      student_name(val){
        if (_.trim(val)) {
          this.studentNameState = 'success'
        } else {
          this.studentNameState = 'error'
        }
      },
      class_id(val){
        if (_.trim(val)) {
          this.classIdState = 'success'
        } else {
          this.classIdState = 'error'
        }
      },
      place_id(val){
        if (_.trim(val)) {
          this.placeIdState = 'success'
        } else {
          this.placeIdState = 'error'
        }
      },
      studentNameState(){
        this.actived = this.checkInput()
      },
      classIdState(){
        this.actived = this.checkInput()
      },
      placeIdState(){
        this.actived = this.checkInput()
      },
    },
    computed: {},
    components: {
      Topbar
    },
    methods: {
      checkInput(){
        let result = this.classIdState === 'success';
        if (this.role_id === 2) {
          result = result && this.studentNameState === 'success' && this.placeIdState === 'success';
        }
        if (this.role_id === 1) {
          result = result && this.placeIdState === 'success';
        }
        return result;
      },
      submit(){
        const param = {
          userId: this.user_id,
          studentName: this.student_name,
          classId: this.class_id,
          roleId: this.role_id,
          place: this.place_id
        };
        MessageBox.confirm('加入班群：' + this.class_id + '?').then(action => {
          api.joinClassGroup(param).then((resp) => {
            if (resp.data.code === 'YYXX/REQUIRE_SUCCESS') {
              MessageBox.confirm('加入成功，继续添加？')
                .then(action => {
                  this.class_id = ''
                })
                .catch(action => {
                  setTimeout(_.bind(function () {
                    this.$router.replace('/user/classgroup/detail/' + this.class_id)
                  }, this), 1200)
                });
            } else {
              MessageBox.alert(resp.data.msg)
            }
          }).catch(msg => {
            alert(msg)
          })
        });
      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../assets/css/vars.scss';
    @import '../../../assets/css/function.scss';

    #cgJoin {
        padding-top: px2em(95px);
        background-color: #fff;
        .img {
            text-align: center;
            img {
                margin: px2em(40px) auto px2em(60px);
                width: px2em(110px);
                height: px2em(80px);
            }
        }
        .submit {
            padding: px2em(40px) px2em(35px);
        }
    }
</style>
