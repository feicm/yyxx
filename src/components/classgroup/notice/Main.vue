<template>
    <div id='cgNotice'>
        <Topbar></Topbar>
        <div v-if="isEmpty" class="empty">
            <Empty name="emptyClassGroupNotice"
                   h1="本群暂无公告"
                   h2="快来编辑公告！">
            </Empty>
            <div class="submit">
                <mt-button @click.native="submit" size="large" type="primary">编辑公告{{count}}</mt-button>
            </div>
        </div>
        <Editor v-else></Editor>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Topbar from '../../topbar/Main.vue';
  import Empty from '../../empty/Main.vue'
  import Editor from './editor/Main.vue'

  export default {
    beforeMount(){

    },
    data () {
      return {
        isEmpty:true
      }
    },
    watch: {},
    computed: {

    },
    components: {
      Topbar,
      Empty,
      Editor
    },
    methods: {
      submit(){
      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../assets/css/vars.scss';
    @import '../../../assets/css/function.scss';

    #cgNotice {
        padding-top: px2em(95px);
        .submit {
            margin: px2em(40px) px2em(35px);
        }
    }
</style>
