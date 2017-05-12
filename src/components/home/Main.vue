<template>
    <div id='main'>
        <div class="group">
            <router-link :to="'/user/info'">
                <mt-button size="large" plain>用户中心</mt-button>
            </router-link>
            <router-link :to="'/user/attestation'">
                <mt-button size="large" plain>认证信息</mt-button>
            </router-link>
            <router-link :to="'/user/classgroup/create'">
                <mt-button size="large" plain>创建班群</mt-button>
            </router-link>
            <router-link :to="'/user/classgroup'">
                <mt-button size="large" plain>我的班群</mt-button>
            </router-link>
            <router-link :to="'/user/classgroup/join'">
                <mt-button size="large" plain>加入班群</mt-button>
            </router-link>
            <router-link :to="'/user/classgroup/notice/1'">
                <mt-button size="large" plain>班群公告</mt-button>
            </router-link>
            <router-link :to="'/user/recharge'">
                <mt-button size="large" plain>充值</mt-button>
            </router-link>
            <router-link :to="'/user/classgroup/task/1'">
                <mt-button size="large" plain>任务</mt-button>
            </router-link>
            <router-link :to="'/user/classgroup/task/history/1'">
                <mt-button size="large" plain>历史任务</mt-button>
            </router-link>
            <router-link :to="'/user/feedback'">
                <mt-button size="large" plain>意见反馈</mt-button>
            </router-link>
            <router-link :to="'/default'">
                <mt-button size="large" plain>空页面</mt-button>
            </router-link>
        </div>
    </div>
</template>

<script>
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
        if(Store.get('__YYXXAPP_OPENID__')){
          this.$router.replace(path)
          return
        }
        const param = {
          appid: 'wxe8faf1adc08e0431',
          secret: 'SECRET',
          code: code,
          grant_type: 'authorization_code'
        };
        axios.get('https://api.weixin.qq.com/sns/oauth2/access_token', param).then((resp) => {
          const data = resp.data ? resp.data : resp;
          Store.set('__YYXXAPP_OPENID__', data.openid);
          this.$router.replace(path)
        })
      }
    }
  }

</script>

<style scoped lang="scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #main {
        padding: px2em(10px)
    }

    .group > a {
        display: block;
        margin-bottom: px2em(10px);
        text-decoration: none;
    }

</style>
