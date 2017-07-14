<template>
    <div id='cgList'>
        <ul>
            <li class="item" v-for="item in list" :key="item">
                <router-link :to="'/user/classgroup/detail/'+item.classId">
                    <h1 class="top">
                        <p class="title">{{item.gradeName}}{{item.className}}</p>
                        <p class="id">ID:{{item.classId}}</p>
                    </h1>
                    <section>
                        <div class="row">
                            <img src="../../../assets/images/view/class_group_list_icon_school.png"/>
                            <p>{{item.schoolName}}</p>
                        </div>
                        <div class="row">
                            <img src="../../../assets/images/view/class_group_list_icon_teacher.png"/>
                            <p>{{item.teacherName}}</p>
                        </div>
                        <div class="row">
                            <img src="../../../assets/images/view/class_group_list_icon_school_year.png"/>
                            <p>学年：{{item.startDate}}- {{item.endDate}}</p>
                        </div>
                    </section>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

  export default {
    beforeMount(){

    },
    props:['list'],
    data () {
      return {}
    },
    watch: {},
    computed: {},
    components: {},
    methods: {}
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../assets/css/vars.scss';
    @import '../../../assets/css/function.scss';

    #cgList {
        padding: px2em(30px) px2em(20px);
        .item {
            position: relative;
            background-color: #fff;
            margin-bottom: px2em(20px);
            border-radius: px2em(8px);
            box-shadow: 0 px2em(5px) px2em(6px) rgba(0, 0, 0, .05);
            .top {
                display: -webkit-flex;
                display: flex;
                -webkit-flex-direction: row;
                flex-direction: row;
                -webkit-flex-wrap: wrap;
                flex-wrap: wrap;
                -webkit-justify-content: space-between;
                justify-content: space-between;
                -webkit-align-items: center;
                align-items: center;
                -webkit-align-content: stretch;
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
                    color: #999;
                    margin-right: px2em(20px);
                    @include font-dpr(14px);
                }
            }
            .row {
                img {
                    position: absolute;
                    margin: px2em(16px) px2em(18px) px2em(16px) px2em(30px);
                    width: px2em(40px);
                    height: px2em(40px);
                }
                p {
                    margin-left: px2em(88px);
                    height: px2em(70px);
                    line-height: px2em(70px);
                    border-bottom: px2em(1px) solid #ddd;
                    color: #333;
                    @include font-dpr(15px);
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
