<template>
    <div id='recharge'>
        <div class="t">
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
                    1、尊敬的用户您好，无"免""任务"标签的资料需要付费。<br>
                    2、金币与人民币的比率是1元=100金币，充值有返利。<br>
                    3、资料会持续更新，您的支持是我们最大的动力，衷心感谢您的支持。
                </p>
            </header>
        </div>
        <div class="select-list">
            <div class="vx-driver">
                <img src="../../assets/images/view/recharge_icon_wechat.png">微信支付
            </div>
            <ul>
                <li v-for="good in goods" :key="good" class="item" @click="createOrder(good.goodId)">
                    <a>
                        <b class="value">{{good.goodDesc}}</b>
                        <b class="des">{{good.goodPrice*price_rate}}+{{good.goodGive*price_rate}}金币</b>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import Topbar from '../topbar/Main.vue';
  import API from '../../api/API'
  import Store from 'store'
  import _ from 'lodash'
  const api = new API();
  import {Toast, Indicator, MessageBox} from 'mint-ui';


  export default {
    beforeMount(){
      this.userId = Store.get('__YYXXAPP_USERID__');
      api.getRechargeGoods({})
        .then(_.bind(function (resp) {
          if (resp.data.code === 'YYXX/REQUIRE_SUCCESS') {
            const data = resp.data.data;
            this.price_rate = data.priceRate;
            this.gold_unit = data.goldUnit;
            this.goods = data.goods;
          } else {
            MessageBox.alert(resp.data.msg)
          }
          Indicator.close()
        }, this))
        .catch(function (err) {
          Indicator.close()
          alert(err);
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
      createOrder(goodId){
        Indicator.open({spinnerType: 'fading-circle'});
        api.createOrder({"goodId": goodId, "userId": this.userId})
          .then(_.bind(function (resp) {
            if (resp.data.code === 'YYXX/REQUIRE_SUCCESS') {
              const data = resp.data.data
              const that = this
              Indicator.close()
              function onBridgeReady() {
                WeixinJSBridge.invoke(
                  'getBrandWCPayRequest', {
                    "appId": data.appId,     //公众号名称，由商户传入
                    "timeStamp": data.timeStamp,         //时间戳，自1970年以来的秒数
                    "nonceStr": data.nonceStr, //随机串
                    "package": data.packageString,
                    "signType": data.signType,         //微信签名方式：
                    "paySign": data.paySign //微信签名
                  },
                  function (res) {
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                      Toast({
                        message: '充值成功',
                        iconClass: 'mintui mintui-success'
                      });
                      setTimeout(function () {
                        that.$router.replace('/user/info')
                      }, 1200)
                    }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                    else{
                      alert(res.err_msg)
                    }
                  }
                );
              }

              if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                  document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                } else if (document.attachEvent) {
                  document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                  document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                }
              } else {
                onBridgeReady();
              }
            } else {
              Indicator.close()
              MessageBox.alert(resp.data.msg)
            }
          }, this))
          .catch(function (err) {
            Indicator.close()
            alert(err);
          });
      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #recharge {
        background-color: $color-default-background;
        .t {
            padding-top: px2em(95px);
            background-color: $color-blue;
        }
        .header {
            text-align: center;
            min-height: px2em(600px);
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
                -webkit-justify-content: flex-start;
                justify-content: flex-start;
                -webkit-align-items: center;
                align-items: center;
                -webkit-align-content: center;
                align-content: center;
                padding: px2em(15px) 0 px2em(25px);
                background-color: #fff;
                li {
                    display: inline-block;
                    text-align: center;
                    width: 33.3333%;
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
