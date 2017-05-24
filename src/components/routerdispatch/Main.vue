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
      this.$store.commit(types.GET_OPEN_ID)
      this.getOpenId()
    },
    data () {
      return {}
    },
    watch: {
      wxAuthInfo(){
        this.getOpenId()
      }
    },
    computed: mapGetters({
      wxAuthInfo: 'wxAuthInfo'
    }),
    components: {
      User
    },
    methods: {
      getOpenId(){
        const {code, path}=this.$store.getters.wxAuthInfo;
        console.log(path)
        if(Store.get('__YYXXAPP_OPENID__')){
          this.$router.replace(path)
          return
        }
        const param = {
          appid: 'wxe8faf1adc08e0431',
          secret: '7399df76597cd54e068f9e3ae50c63bc',
          code: code,
          grant_type: 'authorization_code'
        };
        axios.get('https://api.weixin.qq.com/sns/oauth2/access_token', {
          params:param,
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'}
        }).then((resp) => {
          const data = resp.data ? resp.data : resp;
          Store.set('__YYXXAPP_OPENID__', data.openid);
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
