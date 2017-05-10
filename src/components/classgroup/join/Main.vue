<template>
    <div id='cgJoin'>
        <Topbar :isback="true" :title="'加入班群'"></Topbar>
        <div class="img">
            <img src="../../../assets/images/view/class_group_top_icon_establish.png">
        </div>
        <mt-field v-if="role_id===1 || role_id===2" label="学生姓名" placeholder="请输入学生姓名" :state="userNameState"
                  type="text" v-model="user_name">
        </mt-field>
        <mt-field v-else label="姓名" placeholder="请输入您的姓名" :state="userNameState" type="text" v-model="user_name">
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

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import Topbar from '../../topbar/Main.vue';
  import {Cell, Field, MessageBox, Toast} from 'mint-ui';
  import Store from 'store';
  import _ from 'lodash';
  import API from '../../../api/API'
  const api = new API()
  Vue.component(Cell.name, Cell);
  Vue.component(Field.name, Field);

  export default {
    beforeMount(){
      //未认证，提示并跳转到认证页面，已认证，身份：学生or家长——default view ，老师——用户名，无座位号
      if (!this.isAuth) {
        MessageBox.alert('请先完成身份认证!').then(action => {
          this.$router.push('/user/attestation')
        });
      }
    },
    data () {
      const {user_id, role_id, user_name, isAuth}=this.$store.getters.userInfo;
      return {
        user_id: user_id || Store.get('__YYXXAPP_USERID__'),
        user_name: user_name,
        class_id: '',
        place_id: '',
        userNameState: user_name ? 'success' : '',
        classIdState: '',
        placeIdState: '',
        isAuth: isAuth || Store.get('__YYXXAPP_isAuth__'),
        role_id: (role_id || Store.get('__YYXXAPP_roleId__')) - 0,
        actived: false
      }
    },
    watch: {
      user_name(val){
        if (_.trim(val)) {
          this.userNameState = 'success'
        } else {
          this.userNameState = 'error'
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
      userNameState(){
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
        let result = this.userNameState === 'success' && this.classIdState === 'success';
        if (this.role_id !== 3) {
          result = result && this.placeIdState === 'success';
        }
        return result;
      },
      submit(){
        const param = {
          user_id: this.user_id,
          user_name: this.user_name,
          class_id: this.class_id,
          role_id: this.role_id,
          place_id: this.place_id
        };
        MessageBox.confirm('加入班群：' + this.class_id + '?').then(action => {
          api.joinClassGroup(param).then(() => {
            MessageBox.confirm('加入成功，继续添加？')
              .then(action => {
                this.class_id = ''
              })
              .catch(action => {
                setTimeout(_.bind(function () {
                  this.$router.replace('/user/classgroup/detail/' + this.class_id)
                }, this), 1200)
              });
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
        .img {
            text-align: center;
            img {
                margin: px2em(40px) auto px2em(60px);
                width: px2em(110px);
                height: px2em(80px);
            }
        }
        .submit {
            margin: px2em(40px) px2em(35px);
        }
    }
</style>
