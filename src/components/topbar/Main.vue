<template>
    <div id='topbar'>
        <mt-header v-if="isback" fixed :title="title">
            <mt-button @click="$router.go(-1)" slot="left" icon="back"></mt-button>
        </mt-header>
        <mt-header v-else fixed title="vue demo">
            <router-link to="/" slot="left">
                <mt-button>
                    <img slot="icon" src="../../assets/images/general_top_icon_logo.png">
                </mt-button>
            </router-link>
            <router-link to="/" slot="right">
                <mt-button>
                    <img slot="icon" src="../../assets/images/default/general_top_head_portrait_default.png">
                </mt-button>
            </router-link>
        </mt-header>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Header} from 'mint-ui';

  Vue.component(Header.name, Header);

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
        background-color: $color-topbar;
        .mint-header {
            height: px2em(96px);
            @include font-dpr(12px);
            background-color: $color-topbar;
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
