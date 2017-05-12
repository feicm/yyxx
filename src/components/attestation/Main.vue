<template>
    <div id='attestation'>
        <Topbar v-if="userInfo.isAuth" :isback="true" :title="'认证信息'"></Topbar>
        <Topbar v-else :isback="true" :title="'身份认证'"></Topbar>
        <header class="header">
            <a class="portrait">
                <img src="../../assets/images/general_top_icon_approve_logo.png">
            </a>
            <p class="name"><span>助学英语</span></p>
        </header>
        <mt-field v-if="userInfo.isAuth" readonly disabled placeholder="输入真实姓名" type="text" v-model="userInfo.user_name">
            <img src="../../assets/images/view/attestation_import_username.png">
        </mt-field>
        <mt-field v-else placeholder="输入真实姓名" type="text" :state="userNameState" v-model="user_name">
            <img src="../../assets/images/view/attestation_import_username.png">
        </mt-field>
        <mt-field v-if="userInfo.isAuth" readonly disabled placeholder="输入手机号码" type="tel" v-model="userInfo.mobile">
            <img src="../../assets/images/view/attestation_import_tel_number.png">
        </mt-field>
        <mt-field v-else placeholder="输入手机号码" :state="mobileState" ref="mobile" type="tel"
                  v-model="mobile">
            <img src="../../assets/images/view/attestation_import_tel_number.png">
        </mt-field>
        <div class="select-list">
            <ul>
                <li class="item">
                    <a @click.stop="selectRole('student')">
                        <img v-if="role.student.select || userInfo.role_id-0===1"
                             src="../../assets/images/view/attestation_import_identity_student_pressed.png">
                        <img v-else src="../../assets/images/view/attestation_import_identity_student_normal.png">
                        <b class="name">学生</b>
                    </a>
                </li>
                <li class="item">
                    <a @click.stop="selectRole('patriarch')">
                        <img v-if="role.patriarch.select || userInfo.role_id-0===2"
                             src="../../assets/images/view/attestation_import_identity_patriarch_pressed.png">
                        <img v-else src="../../assets/images/view/attestation_import_identity_patriarch_normal.png">
                        <b class="name">家长</b>
                    </a>
                </li>
                <li class="item">
                    <a @click.stop="selectRole('teacher')">
                        <img v-if="role.teacher.select || userInfo.role_id-0===3"
                             src="../../assets/images/view/attestation_import_identity_teacher_pressed.png">
                        <img v-else src="../../assets/images/view/attestation_import_identity_teacher_normal.png">
                        <b class="name">老师</b>
                    </a>
                </li>
            </ul>
        </div>
        <div class="submit">
            <p class="tips">注意：认证信息不能修改</p>
            <mt-button v-if='actived' @click.native="submit" size="large" type="primary">提交</mt-button>
            <mt-button v-else-if="userInfo.isAuth" size="large" type="primary" disabled>已认证</mt-button>
            <mt-button v-else size="large" type="primary" disabled>提交</mt-button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import {Cell, Field, Toast, MessageBox,Indicator} from 'mint-ui';
  import Topbar from '../topbar/Main.vue';
  import _ from 'lodash';
  import Store from 'store';
  import API from '../../api/API'
  import * as types from '../../store/types'
  const api = new API()

  Vue.component(Cell.name, Cell);
  Vue.component(Field.name, Field);

  export default {
    beforeMount(){
      if(!_.isEmpty(this.$store.getters.userInfo)){
        return;
      }
      Indicator.open({spinnerType: 'fading-circle'});
      if (Store.get('__YYXXAPP_USERID__')) {
        const userId = Store.get('__YYXXAPP_USERID__');
        this.$store.dispatch('getInfoByUserId', {userId: userId}).then(()=>{
          Indicator.close()
        });
        return;
      }
      this.$store.dispatch('getInfoByOpenId', {openid: Store.get('__YYXXAPP_OPENID__')}).then(_.bind(function () {
        const userId = this.$store.state.user.wx_user_info.userId;
        Store.set('__YYXXAPP_USERID__', userId);
        this.$store.dispatch('getInfoByUserId', {userId: userId}).then(()=>{
          Indicator.close()
        });
      }, this));
    },
    data () {
      return {
        user_name: '',
        mobile: '',
        role_id: null,
        userNameState: '',
        mobileState: '',
        actived: false,
        role: {
          student: {
            text: '学生',
            select: true,
            id: 1,
          },
          patriarch: {
            text: '家长',
            select: false,
            id: 2,
          },
          teacher: {
            text: '老师',
            select: false,
            id: 3,
          },
        }
      }
    },
    watch: {
      'role.student.select'(){
        this.role_id = 1;
      },
      'role.patriarch.select'(){
        this.role_id = 2;
      },
      'role.teacher.select'(){
        this.role_id = 3;
      },
      user_name(val){
        if (_.trim(val)) {
          this.userNameState = 'success'
        } else {
          this.userNameState = 'error'
        }
      },
      mobile(val, oldval){
        if (val.length === 11) {
          if (!(/^1[34578]\d{9}$/.test(this.mobile))) {
            this.mobileState = 'error'
          } else {
            this.mobileState = 'success'
          }
        } else if (val.length > 11) {
          this.mobileState = 'error'
        } else {
          this.mobileState = ''
        }
      },
      userNameState(){
        this.actived = this.checkInput()
      },
      mobileState(){
        this.actived = this.checkInput()
      }
    },
    computed: mapGetters({
      userInfo: 'userInfo'
    }),
    components: {
      Topbar
    },
    methods: {
      checkInput(){
        return this.userNameState === 'success' && this.mobileState === 'success';
      },
      selectRole(roleName){
        if(this.userInfo.isAuth){
          return;
        }
        _.each(this.role, function (item) {
          item.select = false
        })
        this.role[roleName].select = !this.role[roleName].select
      },
      submit(){
        const param = {
          user_name: this.user_name,
          mobile: this.mobile,
          role_id: this.role_id
        };
        MessageBox.confirm('认证信息不能修，确认提交?').then(_.bind(function () {
          api.userIdentity(param).then(_.bind(function () {
            Toast({
              message: '认证成功！',
              duration: 1000
            });
            Store.set('__YYXXAPP_isAuth__', 1);
            Store.set('__YYXXAPP_roleId__', this.role_id);
            this.$store.commit(types.CHANGE_AUTH_STATE);
            this.readonly = true;
            setTimeout(_.bind(function () {
              this.$router.go(-1)
            }, this), 1200)
          }, this))
        }, this));
      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #attestation {
        padding-top: px2em(95px);
        background-color: #fff;
        .header {
            text-align: center;
            height: px2em(300px);
            background-size: contain;
            margin-bottom: px2em(34px);
            .portrait {
                display: inline-block;
                margin-top: px2em(28px);
                width: px2em(126px);
                height: px2em(126px);
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .name {
                margin-top: px2em(15px);
                color: $color-blue;
                span {
                    @include font-dpr(20px);

                }
            }
        }
        .mint-cell {
            .mint-field-other {
                position: absolute;
                left: 10px;
                top: 13px;
                width: 22px;
            }
            img {
                width: 22px;
                height: 22px;
            }
            .mint-cell-value {
                padding-left: 32px;
            }
        }
        .select-list {
            border-bottom: px2em(1px) solid #ddd;
            margin: px2em(30px) 10px;
            padding-bottom: px2em(48px);
            ul {
                display: flex;
                display: -webkit-flex;
                flex-direction: row;
                -webkit-flex-direction: row;
                flex-wrap: wrap;
                -webkit-flex-wrap: wrap;
                justify-content: center;
                -webkit-justify-content: center;
                align-items: flex-start;
                -webkit-align-items: flex-start;
                align-content: stretch;
                -webkit-align-content: stretch;
                li {
                    flex: 1;
                    -webkit-flex: 1;
                    text-align: center;
                    a {
                        display: inline-block;
                        text-decoration-line: none;
                        width: px2em(130px);
                        img {
                            max-width: 100%;
                            max-height: 100%;
                            margin-bottom: px2em(15px);
                        }
                        .name {
                            color: #999;
                            @include font-dpr(17);
                        }
                    }
                }
            }
        }
        .submit {
            padding: px2em(40px) px2em(35px) px2em(60px);
            .tips {
                text-align: center;
                color: #999;
                @include font-dpr(17px);
                margin-bottom: px2em(54px);
            }
        }
    }

</style>
