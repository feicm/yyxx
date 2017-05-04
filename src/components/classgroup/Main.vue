<template>
    <div id='classGroup'>
        <Topbar></Topbar>
        <div v-if="isEmpty" class="empty">
            <Empty name="emptyClassGroup"
                   h1="您还没有加入任何班群"
                   h2="请先创建或者加入班群哟！">
            </Empty>
        </div>
        <List v-else></List>
        <mt-tabbar v-model="selected" fixed>

            <mt-tab-item id="create">
                <router-link :to="'/user/classgroup/create'">
                    创建班群
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="add">
                <router-link :to="'/user/classgroup/join'">
                    加入班群
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Tabbar, TabItem} from 'mint-ui'
  import Topbar from '../topbar/Main.vue'
  import List from './list/Main.vue'
  import Empty from '../empty/Main.vue'

  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);


  export default {
    beforeMount(){

    },
    data () {
      return {
        selected:false,
        isEmpty: false
      }
    },
    watch: {},
    computed: {},
    components: {
      Tabbar,
      TabItem,
      Topbar,
      List,
      Empty
    },
    methods: {}
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #classGroup {
        padding-top: px2em(95px);
        padding-bottom: px2em(100px);
        background-color: $color-default-background;
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
        .empty {
            padding-top: px2em(108px);
            height: 1vh;
            background-color: #fff;
        }
    }

</style>
