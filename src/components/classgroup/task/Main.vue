<template>
    <div id='cgTaskList'>
        <Topbar></Topbar>
        <ul>
            <li class="item">
                <section>
                    <div class="row">
                        <span class="tag"><b>1</b></span>
                        <p><b>任务标题</b></p>
                        <div class="status">
                            <img src="../../../assets/images/view/class_group_list_icon_test_completed.png">
                        </div>
                    </div>
                    <div class="row">
                        <p class="des"><b>任务描述任务描述描述务描务描述</b></p>
                    </div>
                </section>
            </li>
            <li class="item">
                <section>
                    <div class="row">
                        <span class="tag"><b>12</b></span>
                        <p><b>任务标题</b></p>
                        <div class="status">
                            <img src="../../../assets/images/view/class_group_list_icon_test_unfinished.png">
                        </div>
                    </div>
                    <div class="row">
                        <p class="des"><b>任务描述任务描述任务描述任务述任务描述任务描述任务描述任务描述</b></p>
                    </div>
                </section>
            </li>
            <li class="item">
                <section>
                    <div class="row">
                        <span class="tag"><b class="long">123</b></span>
                        <p><b>任务标题</b></p>
                        <div class="status">
                            <img src="../../../assets/images/view/class_group_list_icon_test_not_test.png">
                        </div>
                    </div>
                    <div class="row">
                        <p class="des"><b>任务描述任务描述任务描述任务描述任务描述述任务描述任务描述任务描述任务描述任务描述任务描述任务描述</b></p>
                    </div>
                </section>
            </li>
        </ul>
    </div>
</template>

<script>

  import Vue from 'vue'
  import Topbar from '../../topbar/Main.vue'


  export default {
    beforeMount(){

    },
    data () {
      return {
        isEmpty: false
      }
    },
    watch: {},
    computed: {},
    components: {
      Topbar,
    },
    methods: {}
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../assets/css/vars.scss';
    @import '../../../assets/css/function.scss';

    #cgTaskList {
        padding: px2em(125px) px2em(20px) px2em(20px);
        background-color: $color-default-background;
        .item {
            position: relative;
            background-color: #fff;
            margin-bottom: px2em(20px);
            border-radius: px2em(8px);
            box-shadow: 0 px2em(5px) px2em(6px) rgba(0, 0, 0, .05);
            .row {
                .tag {
                    position: absolute;
                    margin: px2em(20px) px2em(20px) px2em(16px) px2em(20px);
                    width: px2em(40px);
                    height: px2em(40px);
                    line-height: px2em(40px);
                    text-align: center;
                    background-color: #c9e0ff;
                    border: px2em(2px) solid $color-blue;
                    border-radius: px2em(8px);
                    color: $color-blue;
                    b {
                        font-weight: normal;
                        @include font-dpr(14px);
                    }
                    b.long {
                        @include font-dpr(10px)
                    }
                }
                p {
                    margin-left: px2em(80px);
                    min-height: px2em(88px);
                    line-height: px2em(88px);
                    border-bottom: px2em(1px) solid #ddd;
                    color: #333;
                    b {
                        @include font-dpr(16px);
                    }
                }
                p.des{
                    padding:px2em(10px) px2em(20px) px2em(10px) 0;
                    min-height: px2em(68px);
                    line-height: 1.8;
                    color:#666;
                    b{
                        @include font-dpr(15px);
                    }
                }
                .status {
                    position: absolute;
                    right: px2em(20px);
                    top: px2em(20px);
                    width: px2em(120px);
                    height: px2em(50px);
                    img {
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
            }
            .row:last-child {
                p {
                    border-bottom: none;
                }
            }
        }
    }
</style>
