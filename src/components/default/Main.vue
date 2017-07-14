<template>
    <div id='default'>
        <Topbar></Topbar>
        <div class="empty">
            <Empty name="emptyClassGroup"
                   h1="功能开发中"
                   h2="敬请期待哦！">
            </Empty>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Indicator} from 'mint-ui';

  import Topbar from '../topbar/Main.vue'
  import Empty from '../empty/Main.vue'

  export default {
    beforeMount(){
      Indicator.close()
    },
    data () {
      return {}
    },
    watch: {},

    components: {
      Topbar,
      Empty
    },
    methods: {}
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #default {
        padding-top: px2em(95px);
        background-color: #fff;
        .empty {
            padding-top: px2em(108px);
            height: 90vh;
            background-color: #fff;
        }
    }

</style>
