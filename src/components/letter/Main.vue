<template>
    <div id='letter'>
        <Topbar></Topbar>
        <div class="section">
            <mt-navbar v-model="selected" fixed>
                <mt-tab-item id="1">字母学习</mt-tab-item>
                <mt-tab-item id="2">国际音标</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <ul>
                        <li v-for="letter in letters" :key="letter">
                            <a><b>{{letter}}</b></a>
                        </li>
                    </ul>
                    <div class="sub-tab">
                        <mt-navbar v-model="itemSelected">
                            <mt-tab-item id="1-1">手写体</mt-tab-item>
                            <mt-tab-item id="1-2">笔划</mt-tab-item>
                            <mt-tab-item id="1-3">口型</mt-tab-item>
                        </mt-navbar>
                        <mt-tab-container v-model="itemSelected">
                            <mt-tab-container-item id="1-1">
                                <div class="sub-item">
                                    <img src="../../assets/images/general_top_icon_approve_logo.png">
                                </div>
                            </mt-tab-container-item>
                            <mt-tab-container-item id="1-2">
                                <div class="sub-item">
                                    1-2
                                </div>
                            </mt-tab-container-item>
                            <mt-tab-container-item id="1-3">
                                <div class="sub-item">
                                    1-3
                                </div>
                            </mt-tab-container-item>
                        </mt-tab-container>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
                </mt-tab-container-item>
            </mt-tab-container>
            <div class="button ">
                <mt-button size="large" type="primary">字母音标测试</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Navbar, TabItem, TabContainer, TabContainerItem, Cell, Indicator} from 'mint-ui';

  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(Cell.name, Cell);

  import Topbar from '../topbar/Main.vue'

  export default {
    beforeMount(){
      Indicator.close()
    },
    data () {
      return {
        selected: '1',
        itemSelected:'1-1',
        letters:['Aa','Bb','Cc','Dd','Ee','Ff','Gg','Hh','Ii','Jj','Kk','Ll','Mm','Nn','Oo','Pp','Qq','Rr','Ss','Tt','Uu','Vv','Ww','Xx','Yy','Zz'],
      }
    },
    watch: {},

    components: {
      Topbar,
    },
    methods: {}
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #letter {
        padding-top: px2em(190px);
        .section{
            .is-fixed{
                top:px2em(95px);
                height: px2em(88px);
                background-color: #fff;
                .mint-tab-item{
                    padding: 15px 0;
                }
                .mint-tab-item.is-selected{
                    border-bottom:px2em(4px) solid $color-blue;
                    color:$color-blue;
                    margin-bottom:-(px2em(4px))
                }
            }
            .mint-tab-item-label{
                @include font-dpr(17px);
            }
            .sub-tab{
                margin-top:px2em(20px);
                .sub-item{
                    margin-top:3px;
                    text-align: center;
                    padding-top:px2em(30px);
                    background-color: #fff;
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
                    width: 14.2857%;
                    height: px2em(70px);
                    margin-top: px2em(10px);
                    margin-bottom: px2em(20px);
                    a {
                        display: inline-block;
                        width: px2em(70px);
                        height: px2em(70px);
                        line-height: px2em(70px);
                        border: px2em(1px) solid #cbcbcb;
                        text-align: center;
                        text-decoration-line: none;
                        border-radius: px2em(8px);
                        b{
                            @include font-dpr(16px);
                            color:#333
                        }
                    }
                    a:hover {
                        background-color: $color-blue;
                        b {
                            color: #fff;
                        }
                    }
                }
            }
            .button{
                background-color: #fff;
                padding: px2em(40px) px2em(35px) px2em(60px);
            }
        }
    }

</style>
