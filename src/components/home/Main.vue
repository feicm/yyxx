<template>
    <div id='main'>
        <div class="group">
            <router-link :to="'/user/info'">
                <mt-button size="large" plain>用户中心</mt-button>
            </router-link>
            <router-link :to="'/user/info'">
                <mt-button size="large" plain>我的班群</mt-button>
            </router-link>
            <router-link :to="'/user/recharge'">
                <mt-button size="large" plain>充值</mt-button>
            </router-link>
            <router-link :to="'/user/info'">
                <mt-button size="large" plain>其他</mt-button>
            </router-link>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Button} from 'mint-ui';
  import User from '../../components/user/Main.vue'

  Vue.component(Button.name, Button);

  export default {
    beforeMount(){

    },
    data () {
      return {}
    },
    watch: {},
    computed: {},
    components: {
      User
    },
    methods: {
      handleClick(name){
        console.log(name)
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
