<template>

</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import {Button,Indicator} from 'mint-ui';
  import User from '../../components/user/Main.vue'
  import * as types from '../../store/types'
  import axios from 'axios'
  import Store from 'store'


  Vue.component(Button.name, Button);

  export default {
    beforeMount(){
      this.$store.commit(types.GET_CODE)
      this.getOpenId()
    },
    data () {
      return {}
    },
    watch: {
      wxAuthInfo(){
        this.getOpenId()
      },
      tokenInfo(val){
        const {openid}=val
        openid && Store.set('__YYXXAPP_OPENID__',openid)
      },
      userInfo(val){
        Store.set('__YYXXAPP_userInfo__',val)
        Store.set('__YYXXAPP_isAuth__',val.isAuth)
      }
    },
    computed: mapGetters({
      wxAuthInfo: 'wxAuthInfo',
      tokenInfo: 'tokenInfo',
      userInfo: 'wx_userInfo'
    }),
    components: {
      User
    },
    methods: {
      getOpenId(){
        const {code, path}=this.$store.getters.wxAuthInfo;
        if(Store.get('__YYXXAPP_OPENID__')){
          this.getUserInfo(path)
          return
        }
        this.$store.dispatch('getUserOpenId',{code:code}).then(() => {
          if(!this.$store.getters.tokenInfo.openid){
            return
          }
          Store.set('__YYXXAPP_OPENID__',this.$store.getters.tokenInfo.openid)
          this.getUserInfo(path)
        }).catch(msg=>{
          alert(msg)
        })
      },
      getUserInfo(path){
        if (Store.get('__YYXXAPP_USERID__')) {
          this.$router.replace(path)
          return;
        }
        Indicator.open({spinnerType: 'fading-circle'});
        this.$store.dispatch('getInfoByOpenId', {openid: Store.get('__YYXXAPP_OPENID__')}).then(()=>{
          Indicator.close();
          const userId = this.$store.state.user.wx_user_info.userId;
          Store.set('__YYXXAPP_USERID__', userId);
          this.$router.replace(path)
        }).catch(msg=>{
          alert(msg)
        });
      }
    }
  }

</script>

<style scoped lang="scss">

</style>
