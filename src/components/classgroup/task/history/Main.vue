<template>
    <div id='cgTaskListHistory'>
        <Topbar></Topbar>
        <ul>
            <li class="item">
                <h1 class="top">
                    <p class="title"><img src="../../../../assets/images/view/class_group_list_icon_calendar.png" class="icon"/> <b>布置时间</b><b>2017.01.23</b></p>
                    <div class="status">
                        <img src="../../../../assets/images/view/class_group_list_icon_test_completed.png">
                    </div>
                </h1>
                <section>
                    <div class="row">
                        <p><b>任务标题</b></p>
                    </div>
                    <div class="row">
                        <p class="des"><b class="t">任务描述任务描述描述务描务描述</b></p>
                    </div>
                    <div class="row">
                        <p class="des"><b class="t">完成时间</b><b class="done-time">2017.01.22</b></p>
                    </div>
                </section>
            </li>
            <li class="item">
                <h1 class="top">
                    <p class="title"><img src="../../../../assets/images/view/class_group_list_icon_calendar.png" class="icon"/> <b>布置时间</b><b>2017.01.23</b></p>
                    <div class="status">
                        <img src="../../../../assets/images/view/class_group_list_icon_test_completed.png">
                    </div>
                </h1>
                <section>
                    <div class="row">
                        <p><b>任务标题</b></p>
                    </div>
                    <div class="row">
                        <p class="des"><b class="t">任务描述任务描述描述务描务描述</b></p>
                    </div>
                    <div class="row">
                        <p class="des"><b class="t">完成时间</b><b class="done-time">2017.01.22</b></p>
                    </div>
                </section>
            </li>
            <li class="item">
                <h1 class="top">
                    <p class="title"><img src="../../../../assets/images/view/class_group_list_icon_calendar.png" class="icon"/> <b>布置时间</b><b>2017.01.23</b></p>
                    <div class="status">
                        <img src="../../../../assets/images/view/class_group_list_icon_test_completed.png">
                    </div>
                </h1>
                <section>
                    <div class="row">
                        <p><b>任务标题</b></p>
                    </div>
                    <div class="row">
                        <p class="des"><b class="t">任务描述任务描述描述务描务描述</b></p>
                    </div>
                    <div class="row">
                        <p class="des"><b class="t">完成时间</b><b class="done-time">2017.01.22</b></p>
                    </div>
                </section>
            </li>
        </ul>
    </div>
</template>

<script>

  import Vue from 'vue'
  import Topbar from '../../../topbar/Main.vue'


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
    @import '../../../../assets/css/vars.scss';
    @import '../../../../assets/css/function.scss';

    #cgTaskListHistory {
        padding: px2em(125px) px2em(20px) px2em(20px);
        background-color: $color-default-background;
        .item {
            position: relative;
            background-color: #fff;
            margin-bottom: px2em(20px);
            border-radius: px2em(8px);
            box-shadow: 0 px2em(5px) px2em(6px) rgba(0, 0, 0, .05);
            .top {
                display: flex;
                display: -webkit-flex;
                flex-direction: row;
                -webkit-flex-direction: row;
                flex-wrap: wrap;
                -webkit-flex-wrap: wrap;
                justify-content: flex-start;
                -webkit-justify-content: flex-start;
                align-items: center;
                -webkit-align-items: center;
                align-content: stretch;
                -webkit-align-content: stretch;
                height: px2em(88px);
                border-bottom: px2em(1px) solid #ddd;
                .title {
                    padding-left:px2em(90px);
                    color: $color-blue;
                    b{
                        @include font-dpr(17px);
                        margin-right: px2em(20px);
                    }
                    img.icon {
                        position: absolute;
                        left:px2em(30px);
                        top:px2em(24px);
                        width: px2em(40px);
                        height: px2em(40px);
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
            .row {
                p {
                    margin-left: px2em(30px);
                    min-height: px2em(72px);
                    line-height: px2em(72px);
                    border-bottom: px2em(1px) solid #ddd;
                    color: #333;
                    b {
                        @include font-dpr(15px);
                    }
                    b.done-time{
                        margin-left: px2em(10px);
                    }
                }
                p.des{
                    padding:px2em(10px) px2em(20px) px2em(10px) 0;
                    min-height: px2em(68px);
                    line-height: 1.8;
                    b.t{
                        color:#666;
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
