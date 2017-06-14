<template>
    <div id='user'>
        <div class="t">
            <Topbar></Topbar>
            <header class="header">
                <a class="portrait">
                    <img v-if="userInfo.headimgurl" :src="userInfo.headimgurl">
                    <img v-else
                         src="../../assets/images/default/general_user_head_portrait_student_default.png">
                </a>
                <p class="username"><span>{{userInfo.nickname}}</span></p>
                <p class="userid"><span>账号：{{userInfo.userId}}</span></p>
            </header>
            <div class="info">
                <div class="left item">
                    <router-link to="/user/attestation">
                        <span v-if="userInfo.roleId-0===1">学生</span>
                        <span v-else-if="userInfo.roleId-0===2">家长</span>
                        <span v-else-if="userInfo.roleId-0===3">老师</span>
                        <span v-else class="no">未认证</span><br>
                        <b>身份</b>
                    </router-link>
                </div>
                <div class="right item">
                    <a href="/user/recharge/?#/user/recharge">
                        <p class="top"><b>{{userInfo.balance}}</b>&nbsp;金币</p>
                        <p class="bottom"><img src="../../assets/images/view/user_center_icon_gold.png"><b>余额</b></p>
                    </a>
                </div>
            </div>
        </div>
        <div class="setting-list">
            <mt-cell
                    title="点击充值"
                    @touchstart.native="changeBackgroundColor"
                    @touchend.native="removeBackgroundColor"
                    @click.native="goRecharge"
                    is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_recharge.png">
            </mt-cell>
            <mt-cell
                    title="意见反馈"
                    to="/user/feedback"
                    @touchstart.native="changeBackgroundColor"
                    @touchend.native="removeBackgroundColor"
                    is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_opinion.png">
            </mt-cell>
            <mt-cell v-if="userInfo.isAuth"
                     title="我的班群"
                     to="/user/classgroup"
                     @touchstart.native="changeBackgroundColor"
                     @touchend.native="removeBackgroundColor"
                     is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_class_group.png">
            </mt-cell>
            <mt-cell v-else
                     title="我的班群"
                     @click.native="showTips"
                     @touchstart.native="changeBackgroundColor"
                     @touchend.native="removeBackgroundColor"
                     is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_class_group.png">
            </mt-cell>
            <mt-cell v-if="userInfo.isAuth"
                     title="认证信息"
                     to="/user/attestation"
                     @touchstart.native="changeBackgroundColor"
                     @touchend.native="removeBackgroundColor"
                     is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_approve.png">
            </mt-cell>
            <mt-cell v-else
                     title="身份认证"
                     to="/user/attestation"
                     @touchstart.native="changeBackgroundColor"
                     @touchend.native="removeBackgroundColor"
                     is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_approve.png">
            </mt-cell>
            <mt-cell v-if="userInfo.isAuth"
                     title="创建班群"
                     to="/user/classgroup/create"
                     @touchstart.native="changeBackgroundColor"
                     @touchend.native="removeBackgroundColor"
                     is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_class_group_establish.png">
            </mt-cell>
            <mt-cell v-else
                     title="创建班群"
                     @click.native="showTips"
                     @touchstart.native="changeBackgroundColor"
                     @touchend.native="removeBackgroundColor"
                     is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_class_group_establish.png">
            </mt-cell>
            <mt-cell
                    title="使用帮助"
                    to="/default"
                    @touchstart.native="changeBackgroundColor"
                    @touchend.native="removeBackgroundColor"
                    is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_assist.png">
            </mt-cell>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import {Cell, Toast, Indicator} from 'mint-ui';
  import Topbar from '../topbar/Main.vue';
  import _ from 'lodash'
  import Store from 'store'

  Vue.component(Cell.name, Cell);

  export default {
    beforeMount(){
      Indicator.close();
      this.$store.dispatch('getInfoByOpenId', {openid: Store.get('__YYXXAPP_OPENID__')}).then(_.bind(function () {
        const userId = this.$store.state.user.wx_user_info.userId;
        Store.set('__YYXXAPP_USERID__', userId);
      }, this));
    },
    data () {
      return {}
    },
    watch: {
      userInfo(val){
        Indicator.close();
        Store.set('__YYXXAPP_userInfo__', val);
        Store.set('__YYXXAPP_isAuth__', val.isAuth);
        Store.set('__YYXXAPP_roleId__', val.roleId);
      }
    },
    computed: mapGetters({
      userInfo: 'wx_userInfo'
    }),
    components: {
      Cell,
      Topbar
    },
    methods: {
      showTips(){
        Toast({
          position: 'bottom',
          message: '请先完成身份认证！'
        });
      },
      goRecharge(){
        location.href = '/user/recharge/?#/user/recharge'
      },
      changeBackgroundColor(e){
        e.target.parentElement.style.backgroundColor="fefefe";
      },
      removeBackgroundColor(e){
        e.target.parentElement.style.backgroundColor="#fff";
      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #user {
        background-color: $color-default-background;
        .t {
            padding-top: px2em(95px);
            background-color: $color-blue;
        }
        .header {
            text-align: center;
            height: px2em(300px);
            background-image: url('../../assets/images/view/user_center_background.png');
            background-size: cover;
            .portrait {
                display: inline-block;
                margin-top: px2em(8px);
                width: px2em(126px);
                height: px2em(126px);
                border-radius: 50%;
                border: px2em(6px) solid #fff;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .username {
                margin-top: px2em(10px);
                color: #fff;
                span {
                    @include font-dpr(18px);

                }
            }
            .userid {
                margin-top: px2em(7px);
                color: rgba(255, 255, 255, .8);
                span {
                    @include font-dpr(12px);

                }
            }
        }
        .info {
            height: px2em(120px);
            background-color: #fff;
            display: flex;
            display: -webkit-flex;
            flex-direction: row;
            -webkit-flex-direction: row;
            flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            justify-content: center;
            -webkit-justify-content: center;
            align-content: center;
            -webkit-align-content: center;
            align-items: center;
            -webkit-align-items: center;
            .item {
                width: 45%;
                height: px2em(52px);
                flex: 1;
                -webkit-flex: 1;
                text-align: center;
            }
            .left {
                border-right: 1px solid #ddd;
                span {
                    position: relative;
                    background-color: $color-wathet;
                    color: #fff;
                    padding: px2em(4px) px2em(18px);
                    border-radius: 3px;
                    top: -(px2em(10px));
                    font-weight: normal;
                }
                .no {
                    background-color: $color-default;
                }
                b {
                    position: relative;
                    color: #999;
                    font-weight: normal;
                    @include font-dpr(14px);
                }
            }
            .right {
                .top, .bottom {
                    position: relative;
                }
                .top {
                    top: -(px2em(22px));
                    color: $color-blue;
                    b {
                        @include font-dpr(22px);
                        font-weight: normal;
                    }
                }
                .bottom {
                    top: -(px2em(22px));
                    b {
                        font-weight: normal;
                        @include font-dpr(14px);
                    }
                    color: #999;
                    img {
                        float: left;
                        width: px2em(30px);
                        height: px2em(30px);
                        margin-left: 32%;
                        margin-right: -36%;
                        margin-top: px2em(3px);
                    }
                }
            }
        }
        .setting-list {
            margin: px2em(44px) 0;
            .mint-cell {
                height: px2em(88px);
                img {
                    width: px2em(50px);
                    height: px2em(50px);
                }
            }
            .mint-cell-allow-right::after {
                border-color: $color-blue;
            }
        }
    }

</style>
