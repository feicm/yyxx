<template>
    <div id='topbar'>
        <mt-header fixed title="助学英语">
            <router-link to="/home" slot="left">
                <mt-button>
                    <img slot="icon" src="../../assets/images/general_top_icon_logo.png">
                </mt-button>
            </router-link>
            <router-link to="/user/info" slot="right">
                <mt-button>
                    <img slot="icon" src="../../assets/images/default/general_top_head_portrait_default.png">
                </mt-button>
            </router-link>
        </mt-header>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Header,Button} from 'mint-ui';

  Vue.component(Header.name, Header);
  Vue.component(Button.name, Button);

  export default {
    beforeMount(){

    },
    data () {
      return {}
    },
    props:['isback','title'],
    watch: {},
    computed: {},
    components: {},
    methods: {}
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #topbar {
        background-color: $color-blue;
        .mint-header {
            height: px2em(96px);
            @include font-dpr(12px);
            background-color: $color-blue;
            .mint-header-title{
                @include font-dpr(18px);
            }
            .is-left img{
                width: px2em(60px);
                height: px2em(60px);
            }
            .is-right img{
                width: px2em(72px);
                height: px2em(72px);
            }
        }
    }
</style>
