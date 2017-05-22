<template>
    <div id='cgNotice'>
        <Topbar :isback="true" :title="'公告'"></Topbar>
        <div v-if="isEmpty" class="empty">
            <Empty v-if="role_id === 3" name="emptyClassGroupNotice"
                   h1="本群暂无公告"
                   h2="快来编辑公告！">
            </Empty>
            <Empty v-else name="emptyClassGroupNotice"
                   h1="本群暂无公告"
                   h2="">
            </Empty>
            <div v-if="role_id === 3" class="submit">
                <mt-button @click="add" size="large" type="primary">编辑公告</mt-button>
            </div>
        </div>

        <Editor v-else :info="noticeInfo" :isNew="isNew"></Editor>
    </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import Topbar from '../../topbar/Main.vue';
  import Empty from '../../empty/Main.vue'
  import Editor from './editor/Main.vue'
  import { Indicator} from 'mint-ui'
  import _ from 'lodash'


  export default {
    beforeMount(){
      if(!_.isEmpty(this.$store.getters.noticeInfo)){
        this.isLoading=false;
        return;
      }
      Indicator.open({spinnerType: 'fading-circle'});
      this.$store.dispatch('getNotifyInfo', {classId: this.$route.params.id}).then(()=>{
        Indicator.close();
      }).catch(()=>{
        this.isEmpty=true;
        this.isLoading=false;
      })
    },
    data () {
      const {userId, roleId, userName, isAuth}=this.$store.getters.userInfo;
      return {
        user_id: userId,
        role_id: roleId,
        user_name: userName,
        isAuth: isAuth,
        isLoading:true,
        isEmpty: false,
        isNew: false,
      }
    },
    watch: {
      noticeInfo(val){
        if(!_.isEmpty(val)){
          this.isEmpty=false;
        }else {
          this.isEmpty=true
        }
        this.isLoading=false;
      }
    },
    computed: mapGetters({
      noticeInfo: 'noticeInfo'
    }),
    components: {
      Topbar,
      Empty,
      Editor
    },
    methods: {
      add(){
        this.isEmpty = false;
        this.isNew = true;
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
