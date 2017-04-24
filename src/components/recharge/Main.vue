<template>
    <div id='recharge'>
        <Topbar></Topbar>
        <header class="header">
            <a class="portrait">
                <img src="../../assets/images/view/recharge_icon_wallet.png">
            </a>
            <div class="tips">
                <a>
                    <img src="../../assets/images/view/recharge_icon_love.png">温馨提示
                </a>
            </div>
            <p class="des">
                1、尊敬的用户您好，无"免"字标签的章节需付费才能阅读。<br>
                2、金币与人民币的比率是：1元 = 100金币。<br>
                3、连载作品会每天持续更新，您的支持是作者最大的动力，衷心感谢您对正版的支持。
            </p>
        </header>
        <div class="select-list">
            <div class="vx-driver">
                <img src="../../assets/images/view/recharge_icon_wechat.png">微信支付
            </div>
            <ul>
                <li class="item">
                    <a>
                        <b class="value">50元</b>
                        <b class="des">5000+800金币</b>
                    </a>
                </li>
                <li class="item">
                    <a>
                        <b class="value">50元</b>
                        <b class="des">5000+800金币</b>
                    </a>
                </li>
                <li class="item">
                    <a>
                        <b class="value">50元</b>
                        <b class="des">5000+800金币</b>
                    </a>
                </li>
                <li class="item">
                    <a>
                        <b class="value">50元</b>
                        <b class="des">5000+800金币</b>
                    </a>
                </li>
                <li class="item">
                    <a>
                        <b class="value">50元</b>
                        <b class="des">5000+800金币</b>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Topbar from '../topbar/Main.vue';


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
      Topbar
    },
    methods: {}
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #recharge {
        padding-top: px2em(95px);
        background-color: $color-default-background;
        .header {
            text-align: center;
            height: px2em(600px);
            background-image: url('../../assets/images/view/recharge_background.png');
            background-size: contain;
            .portrait {
                display: inline-block;
                margin-top: px2em(7px);
                width: px2em(260px);
                height: px2em(210px);
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .tips {
                text-align: center;
                margin-top: px2em(5px);
                a {
                    display: inline-block;
                    height: px2em(50px);
                    line-height: px2em(50px);
                    border-radius: px2em(25px);
                    border: 1px solid rgba(255, 255, 255, .8);
                    color: #fff;
                    padding: 0 px2em(15px);
                    @include font-dpr(15px);
                    img {
                        width: px2em(20px);
                        height: px2em(20px);
                        margin-right: px2em(10px);
                    }
                }
            }
            .des {
                padding: px2em(25px) px2em(16px) px2em(20px);
                text-align: left;
                color: #fff;
                line-height: 1.7;
                @include font-dpr(15px);
            }
        }
        .select-list {
            margin-top: px2em(44px);
            .vx-driver {
                height: px2em(88px);
                line-height: px2em(88px);
                background-color: #fff;
                border-top: px2em(1px) solid #eee;
                border-bottom: px2em(1px) solid #eee;
                padding-left: px2em(90px);
                @include font-dpr(17px);
                img {
                    float: left;
                    margin-left: -(px2em(70px));
                    margin-top: px2em(18px);
                    width: px2em(50px);
                    height: px2em(50px);
                }
            }
            ul {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: flex-start;
                align-content: stretch;
                padding: px2em(15px) 0 px2em(25px);
                background-color: #fff;
                li {
                    flex: 0 1 auto;
                    width: px2em(250px);
                    text-align: center;
                    a{
                        display: inline-block;
                        width: px2em(220px);
                        border:px2em(2px) solid #cbcbcb;
                        text-align: center;
                        text-decoration-line: none;
                        margin-top:px2em(10px);
                        margin-bottom:px2em(20px);
                        padding: px2em(20px) 0;
                        border-radius: px2em(10px);
                        .value{
                            display: block;
                            @include font-dpr(17px);
                        }
                        .des{
                            color:rgba(0,0,0,.8);
                            @include font-dpr(12);
                        }
                    }
                    a:hover{
                        color:#fff;
                        background-color: $color-blue;
                        .des{
                            color:rgba(255,255,255,.8);
                        }
                    }
                }
            }
        }
    }

</style>
