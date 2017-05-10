<template>
    <div id='classGroup'>
        <Topbar></Topbar>
        <div v-if="isEmpty" class="empty">
            <Empty name="emptyClassGroup"
                   h1="您还没有加入任何班群"
                   h2="请先创建或者加入班群哟！">
            </Empty>
        </div>
        <List v-else :list="classGroupList"></List>
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
  import {mapGetters} from 'vuex'
  import {Tabbar, TabItem, Indicator} from 'mint-ui'
  import Topbar from '../topbar/Main.vue'
  import List from './list/Main.vue'
  import Empty from '../empty/Main.vue'
  import Store from 'store'
  import _ from 'lodash'

  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);


  export default {
    beforeMount(){
      if(!this.$store.getters.classGroupList.length){
        Indicator.open({spinnerType: 'fading-circle'});
      }
      if (Store.get('__YYXXAPP_OPENID__')) {
        const userId = Store.get('__YYXXAPP_USERID__');
        this.$store.dispatch('getClassesByUserId', {user_id: userId}).then(() => {
          Indicator.close()
        });
        return;
      }
      //todo 第一次打开取openid
      Store.set('__YYXXAPP_OPENID__', 'okOB6w9oW_sytNIG3l2lY6iZ1Vf0');
      this.$store.dispatch('getInfoByOpenId', {openid: Store.get('__YYXXAPP_OPENID__')}).then(_.bind(function () {
        const userId = this.$store.state.user.wx_user_info.userId;
        Store.set('__YYXXAPP_USERID__', userId);
        this.$store.dispatch('getClassesByUserId', {userId: userId}).then(() => {
          Indicator.close()
        });
      }, this));
    },
    data () {
      return {
        selected: false,
        isEmpty: !this.$store.getters.classGroupList.length
      }
    },
    watch: {
      classGroupList(val){
        this.isEmpty=!val.length;
        Indicator.close()
      }
    },
    computed: mapGetters({
      classGroupList: 'classGroupList'
    }),
    components: {
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
