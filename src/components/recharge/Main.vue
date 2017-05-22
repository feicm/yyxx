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
                2、金币与人民币的比率是：1元 = {{price_rate}}{{gold_unit}}。<br>
                3、连载作品会每天持续更新，您的支持是作者最大的动力，衷心感谢您对正版的支持。
            </p>
        </header>
        <div class="select-list">
            <div class="vx-driver">
                <img src="../../assets/images/view/recharge_icon_wechat.png">微信支付
            </div>
            <ul>
                <li v-for="good in goods" class="item" @click="createOrder(good.good_code)">
                    <a>
                        <b class="value">{{good.good_desc}}</b>
                        <b class="des">{{good.good_price*price_rate}}+{{good.good_give*price_rate}}金币</b>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Topbar from '../topbar/Main.vue';
  import API from '../../api/API'
  import Store from 'store'
  import _ from 'lodash'
  const api = new API();
  import { Toast } from 'mint-ui';


  export default {
    beforeMount(){
      this.userId=Store.get('__YYXXAPP_USERID__');
      api.getRechargeGoods({})
        .then(_.bind(function (res) {
          this.price_rate = res.data.price_rate;
          this.gold_unit = res.data.gold_unit;
          this.goods = res.data.goods;
        }, this))
        .catch(function (err) {
          console.log(err);
        });
    },
    data () {
      return {
        price_rate: 100,
        gold_unit: '金币',
        goods: []
      }
    },
    watch: {},
    computed: {},
    components: {
      Topbar
    },
    methods: {
      createOrder(good_code){
        api.createOrder({"goodCode":good_code,"userId":this.userId})
          .then(_.bind(function (res) {
            console.dir(res)
            function onBridgeReady(){
              WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                  "appId":res.app_id,     //公众号名称，由商户传入
                  "timeStamp":res.time_stamp,         //时间戳，自1970年以来的秒数
                  "nonceStr":res.nonce_string, //随机串
                  "package":res.package,
                  "signType":res.sign_type,         //微信签名方式：
                  "paySign":"res.pay_sign" //微信签名
                },
                function(res){
                  if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                    Toast({
                      message: '提交成功',
                      iconClass: 'mintui mintui-success'
                    });
                  }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                }
              );
            }
            if (typeof WeixinJSBridge == "undefined"){
              if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
              }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
              }
            }else{
              onBridgeReady();
            }
          }, this))
          .catch(function (err) {
            console.log(err);
          });
      }
    }
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
            background-size: cover;
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
                display: -webkit-flex;
                display: flex;
                -webkit-flex-direction: row;
                flex-direction: row;
                -webkit-flex-wrap: wrap;
                flex-wrap: wrap;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-align-items: center;
                align-items: center;
                -webkit-align-content: center;
                align-content: center;
                padding: px2em(15px) 0 px2em(25px);
                background-color: #fff;
                li {
                    display: inline-block;
                    text-align: center;
                    width: 33%;
                    a {
                        display: inline-block;
                        width: 90%;
                        border: px2em(2px) solid #cbcbcb;
                        text-align: center;
                        text-decoration-line: none;
                        margin-top: px2em(10px);
                        margin-bottom: px2em(20px);
                        padding: px2em(20px) 0;
                        border-radius: px2em(10px);
                        .value {
                            display: block;
                            @include font-dpr(17px);
                        }
                        .des {
                            color: rgba(0, 0, 0, .8);
                            @include font-dpr(12);
                        }
                    }
                    a:hover {
                        color: #fff;
                        background-color: $color-blue;
                        .des {
                            color: rgba(255, 255, 255, .8);
                        }
                    }
                }
            }
        }
    }

</style>
