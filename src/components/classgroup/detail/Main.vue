<template>
    <div id='cgDetail'>
        <Topbar></Topbar>
        <ul class="card-list">
            <li class="card">
                <h1 class="top">
                    <p class="title">高三年二班</p>
                    <p class="id">ID:23425252525</p>
                </h1>
                <section>
                    <div class="row">
                        <img class="icon" src="../../../assets/images/view/class_group_list_icon_school.png"/>
                        <p>红梅中学</p>
                    </div>
                    <div class="row">
                        <img class="icon" src="../../../assets/images/view/class_group_list_icon_teacher.png"/>
                        <p>隔壁老王</p>
                    </div>
                    <div class="row">
                        <img class="icon" src="../../../assets/images/view/class_group_list_icon_school_year.png"/>
                        <p>学年：2014.7- 2015.9</p>
                    </div>
                    <div class="row">
                        <img class="icon" src="../../../assets/images/view/class_group_list_icon_creator.png"/>
                        <p>老李 <b class="s">创建</b></p>
                    </div>
                </section>
                <div class="bottom">
                    <div class="l item">
                        布置任务
                    </div>
                    <div class="r item">
                        退出该班群
                    </div>
                </div>
            </li>
            <li class="card">
                <div class="left">
                    <div class="w">
                        <a class="portrait">
                            <img src="../../../assets/images/default/general_user_head_portrait_student_default.png">
                        </a>
                        <p class="username"><span>张三</span></p>
                        <p class="des"><span>学生姓名</span></p>
                    </div>
                </div>
                <section class="box">
                    <div class="row">
                        <img class="icon" src="../../../assets/images/view/class_group_list_icon_new_task.png"/>
                        <p>最新任务完成情况</p>
                        <div class="status">
                            <img src="../../../assets/images/view/class_group_list_icon_test_unfinished.png">
                        </div>
                    </div>
                    <div class="row">
                        <router-link to="/user/classgroup/task/history/1">
                            <img class="icon"
                                 src="../../../assets/images/view/class_group_list_icon_historical_task.png"/>
                            <p>历史记录</p>
                        </router-link>
                    </div>
                </section>
            </li>
            <li class="card">
                <div class="left">
                    <div class="w">
                        <a class="portrait">
                            <img src="../../../assets/images/default/general_user_head_portrait_student_default.png">
                        </a>
                        <p class="username"><span>张三</span></p>
                        <p class="des"><span>学生姓名</span></p>
                    </div>
                </div>
                <section class="box">
                    <div class="row">
                        <img class="icon" src="../../../assets/images/view/class_group_list_icon_new_task.png"/>
                        <p>最新任务完成情况</p>
                        <div class="status">
                            <img src="../../../assets/images/view/class_group_list_icon_test_not_test.png">
                        </div>
                    </div>
                    <div class="row">
                        <router-link to="/user/classgroup/task/history/1">
                            <img class="icon"
                                 src="../../../assets/images/view/class_group_list_icon_historical_task.png"/>
                            <p>历史记录</p>
                        </router-link>
                    </div>
                </section>
            </li>
            <li class="card">
                <div class="left">
                    <div class="w">
                        <a class="portrait">
                            <img src="../../../assets/images/default/general_user_head_portrait_student_default.png">
                        </a>
                        <p class="username"><span>张三</span></p>
                        <p class="des"><span>学生姓名</span></p>
                    </div>
                </div>
                <section class="box">
                    <div class="row">
                        <img class="icon" src="../../../assets/images/view/class_group_list_icon_new_task.png"/>
                        <p>最新任务完成情况</p>
                        <div class="status">
                            <img src="../../../assets/images/view/class_group_list_icon_test_completed.png">
                        </div>
                    </div>
                    <div class="row">
                        <router-link to="/user/classgroup/task/history/1">
                            <img class="icon"
                                 src="../../../assets/images/view/class_group_list_icon_historical_task.png"/>
                            <p>历史记录</p>
                        </router-link>
                    </div>
                </section>
            </li>
            <li class="card">
                <div class="left">
                    <div class="w">
                        <a class="portrait">
                            <img src="../../../assets/images/default/general_user_head_portrait_student_default.png">
                        </a>
                        <p class="username"><span>张三</span></p>
                        <p class="des"><span>学生姓名</span></p>
                    </div>
                </div>
                <section class="box">
                    <div class="row">
                        <img class="icon" src="../../../assets/images/view/class_group_list_icon_new_task.png"/>
                        <p>最新任务完成情况</p>
                        <div class="status">
                            <img src="../../../assets/images/view/class_group_list_icon_test_unfinished.png">
                        </div>
                    </div>
                    <div class="row">
                        <img class="icon" src="../../../assets/images/view/class_group_list_icon_historical_task.png"/>
                        <p>历史记录</p>
                    </div>
                </section>
            </li>
        </ul>
        <mt-tabbar v-model="selected" fixed>

            <mt-tab-item id="create">
                <router-link :to="'/user/classgroup/notice/1'">
                    公告栏
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="add">
                <router-link :to="'/user/classgroup/task/1'">
                    最新任务
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>

  import Vue from 'vue'
  import {Tabbar, TabItem} from 'mint-ui'
  import Topbar from '../../topbar/Main.vue'


  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);


  export default {
    beforeMount(){

    },
    data () {
      return {
        selected: false,
        isEmpty: false
      }
    },
    watch: {},
    computed: {},
    components: {
      Tabbar,
      TabItem,
      Topbar,
    },
    methods: {}
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../assets/css/vars.scss';
    @import '../../../assets/css/function.scss';

    #cgDetail {
        padding-top: px2em(95px);
        padding-bottom: px2em(100px);
        background-color: $color-default-background;
        .card-list {
            padding: px2em(30px) px2em(20px);
            .card {
                position: relative;
                background-color: #fff;
                margin-bottom: px2em(20px);
                border-radius: px2em(8px);
                box-shadow: 0 px2em(5px) px2em(6px) rgba(0, 0, 0, .05);
                .left {
                    float: left;
                    width: px2em(180px);
                    .w {
                        margin: px2em(12px) 0;
                        border-right: px2em(2px) dashed #ddd;
                        text-align: center;
                        .username {
                            color: #333;
                            @include font-dpr(15px);
                        }
                        .des {
                            color: #ddd;
                            @include font-dpr(10px);
                        }
                        img {
                            width: px2em(80px);
                            height: px2em(80px);
                        }
                    }
                }
                .box {
                    margin-left: px2em(180px);
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
                    img.icon {
                        position: absolute;
                        margin: px2em(25px) px2em(15px) px2em(16px) px2em(30px);
                        width: px2em(40px);
                        height: px2em(40px);
                    }
                    p {
                        margin-left: px2em(80px);
                        height: px2em(73px);
                        line-height: px2em(73px);
                        border-bottom: px2em(1px) solid #ddd;
                        color: #666;
                        @include font-dpr(15px);
                        .s {
                            color: #666;
                            @include font-dpr(12px)
                        }
                    }
                }
                .row:last-child {
                    p {
                        border-bottom: none;
                    }
                }
            }
            .card:first-child {
                padding: 0;
                .top {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    align-items: center;
                    align-content: stretch;
                    height: px2em(88px);
                    border-bottom: px2em(1px) solid #ddd;
                    .title {
                        display: inline-block;
                        padding: px2em(5px) px2em(25px);
                        color: #fff;
                        @include font-dpr(17px);
                        background-color: $color-blue;
                        border-radius: 0 px2em(28px) px2em(28px) 0;
                    }
                    .title:before {
                        display: inline-block;
                        margin-left: -(px2em(15px));
                        margin-bottom: px2em(3px);
                        margin-right: px2em(15px);
                        content: '';
                        width: px2em(10px);
                        height: px2em(10px);
                        border-radius: 999px;
                        background-color: #fff;
                    }
                    .id {
                        position: absolute;
                        right: px2em(20px);
                        color: #999;
                        @include font-dpr(14px);
                    }
                }
                .row {
                    p {
                        color: #333;
                        height: px2em(70px);
                        line-height: px2em(70px);
                    }
                }
                .bottom {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                    height: px2em(88px);
                    border-top: px2em(1px) solid #ddd;
                    .item {
                        flex: 1;
                        text-align: center;
                        @include font-dpr(16px)
                    }
                    .l {
                        color: $color-blue;
                        border-right: 1px solid #ddd;
                    }
                    .r {
                        color: #ff5555;
                    }
                }
            }
        }
        .mint-tab-item {
            background-color: rgb(250, 250, 250);
            height: px2em(80px);
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: stretch;
            a {
                color: #333;
                @include font-dpr(18px);
            }
        }
        .mint-tab-item:first-child {
            border-right: px2em(1px) solid #ddd;
        }
    }
</style>
