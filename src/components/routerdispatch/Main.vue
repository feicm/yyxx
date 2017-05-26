<template>

</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import {Button} from 'mint-ui';
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
        console.log(val)
        const {openid}=val
        openid && Store.set('__YYXXAPP_OPENID__',openid)
      }
    },
    computed: mapGetters({
      wxAuthInfo: 'wxAuthInfo',
      tokenInfo: 'tokenInfo'
    }),
    components: {
      User
    },
    methods: {
      getOpenId(){
        const {code, path}=this.$store.getters.wxAuthInfo;
        if(Store.get('__YYXXAPP_OPENID__')){
          this.$router.replace(path)
          return
        }
        this.$store.dispatch('getUserOpenId',{code:code}).then(() => {
          Store.set('__YYXXAPP_OPENID__',this.$store.getters.tokenInfo.openid)
          console.log(Store.get('__YYXXAPP_OPENID__'))
          this.$router.replace(path)
        }).catch(msg=>{
          alert(msg)
        })
      }
    }
  }

</script>

<style scoped lang="scss">

</style>
