<template>
    <div id='user'>
        <Topbar></Topbar>
        <header class="header">
            <a class="portrait">
                <img src="../../assets/images/default/general_user_head_portrait_student_default.png">
            </a>
            <p class="username"><span>张三</span></p>
            <p class="userid"><span>账号：48759349</span></p>
        </header>
        <div class="info">
            <div class="left item">
                <span>家长</span><br>
                <b>身份</b>
            </div>
            <div class="right item">
                <p class="top"><b>2342.32</b>&nbsp;金币</p>
                <p class="bottom"><img src="../../assets/images/view/user_center_icon_gold.png">余额</p>
            </div>
        </div>
        <div class="setting-list">
            <mt-cell
                    title="点击充值"
                    to="/user/recharge"
                    is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_recharge.png">
            </mt-cell>
            <mt-cell
                    title="意见反馈"
                    to="/user/feedback"
                    is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_opinion.png">
            </mt-cell>
            <mt-cell
                    title="我的班群"
                    to="／"
                    is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_class_group.png">
            </mt-cell>
            <mt-cell
                    title="认证信息"
                    to="/user/attestation"
                    is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_approve.png">
            </mt-cell>
            <mt-cell
                    title="创建班群"
                    to="／"
                    is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_class_group_establish.png">
            </mt-cell>
            <mt-cell
                    title="使用帮助"
                    to="／"
                    is-link>
                <img slot="icon" src="../../assets/images/view/user_center_icon_list_assist.png">
            </mt-cell>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Cell} from 'mint-ui';
  import Topbar from '../topbar/Main.vue';

  Vue.component(Cell.name, Cell);

  export default {
    beforeMount(){

    },
    data () {
      return {}
    },
    // props:['dataList'],
    watch: {},
    computed: {},
    components: {
      Cell,
      Topbar
    },
    methods: {}
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #user {
        padding-top: px2em(95px);
        background-color: $color-default-background;
        .header {
            text-align: center;
            height: px2em(300px);
            background-image: url('../../assets/images/view/user_center_background.png');
            background-size: contain;
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
                color:#fff;
                span{
                    @include font-dpr(18px);

                }
            }
            .userid {
                margin-top: px2em(7px);
                color:rgba(255,255,255,.8);
                span{
                    @include font-dpr(12px);

                }
            }
        }
        .info{
            height: px2em(120px);
            background-color: #fff;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;
            .item{
                height: px2em(52px);
                flex:1;
                text-align: center;
            }
            .left{
                border-right:1px solid #ddd;
                span{
                    position:relative;
                    background-color: $color-wathet;
                    color:#fff;
                    padding:px2em(4px) px2em(18px);
                    border-radius:3px;
                    top:-(px2em(20px));
                    font-weight:normal;
                }
                b{
                    position:relative;
                    color:#999;
                    font-weight: normal;
                    @include font-dpr(14px);
                }
            }
            .right{
                .top,.bottom{
                    position:relative;
                }
                .top{
                    top:-(px2em(22px));
                    color:$color-blue;
                    b{
                        @include font-dpr(22px);
                        font-weight:normal;
                    }
                }
                .bottom{
                    top:-(px2em(22px));
                    @include font-dpr(14px);
                    color:#999;
                    img{
                        float:left;
                        width:px2em(32px);
                        height:px2em(32px);
                        margin-left: 32%;
                        margin-right: -36%;
                    }
                }
            }
        }
        .setting-list {
            margin-top: px2em(44px);
            .mint-cell {
                height: px2em(88px);
                img {
                    width: px2em(50px);
                    height: px2em(50px);
                }
            }
            .mint-cell-allow-right::after{
                border-color:$color-blue;
            }
            a {
                text-decoration-line: none;
            }
        }
    }

</style>
