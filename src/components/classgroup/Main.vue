<template>
    <div id='classGroup'>
        <Topbar></Topbar>
        <div v-if="isEmpty && !isLoading" class="empty">
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

<script type="text/ecmascript">
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import {Tabbar, TabItem, Indicator, MessageBox} from 'mint-ui'
  import Topbar from '../topbar/Main.vue'
  import List from './list/Main.vue'
  import Empty from '../empty/Main.vue'
  import Store from 'store'
  import _ from 'lodash'

  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);


  export default {
    beforeMount(){
      if (!Store.get('__YYXXAPP_isAuth__')) {
        MessageBox.alert('请先完成身份认证!').then(action => {
          this.$router.push('/user/attestation')
        });
        return
      }
      Indicator.open({spinnerType: 'fading-circle'});
      const userId = Store.get('__YYXXAPP_USERID__');
      this.$store.dispatch('getClassesByUserId', {userId: userId}).then(() => {
        Indicator.close()
        this.isLoading = false
      });
    },
    data () {
      const {isAuth}=this.$store.getters.userInfo;
      return {
        isLoading: true,
        selected: false,
        isAuth: isAuth || Store.get('__YYXXAPP_isAuth__'),
        isEmpty: !this.$store.getters.classGroupList
      }
    },
    watch: {
      classGroupList(val){
        this.isEmpty = !val;
        this.isLoading = false
        Indicator.close()
      },
      wx_userInfo(val){
        Indicator.close();
        Store.set('__YYXXAPP_isAuth__', val.isAuth);
        Store.set('__YYXXAPP_roleId__', val.roleId);
      }
    },
    computed: mapGetters({
      classGroupList: 'classGroupList',
      wx_userInfo: 'wx_userInfo'
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
            display: -webkit-flex;
            flex-direction: row;
            -webkit-flex-direction: row;
            flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            justify-content: center;
            -webkit-justify-content: center;
            align-items: center;
            -webkit-align-items: center;
            align-content: stretch;
            -webkit-align-content: stretch;
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
            height: 70vh;
            background-color: #fff;
        }
    }

</style>
