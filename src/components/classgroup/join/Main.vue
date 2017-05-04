<template>
    <div id='cgJoin'>
        <Topbar></Topbar>
        <div class="img">
            <img src="../../../assets/images/view/class_group_top_icon_establish.png">
        </div>
        <mt-field label="学生姓名" placeholder="请输入学生姓名" type="text" v-model="name">
        </mt-field>
        <mt-field label="班群ID" placeholder="请输入班群ID" type="text" v-model="id">
        </mt-field>
        <mt-field label="学生座位号" placeholder="请输入学生座位号" type="number" v-model="number">
        </mt-field>
        <div class="submit">
            <mt-button @click.native="submit" size="large" type="primary" disabled>加入</mt-button>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Topbar from '../../topbar/Main.vue';

  export default {
    beforeMount(){

    },
    data () {
      return {}
    },
    watch: {},
    computed: {},
    components: {
      Topbar
    },
    methods: {}
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../assets/css/vars.scss';
    @import '../../../assets/css/function.scss';

    #cgJoin {
        padding-top: px2em(95px);
        .img {
            text-align: center;
            img {
                margin: px2em(40px) auto px2em(60px);
                width: px2em(110px);
                height: px2em(80px);
            }
        }
        .submit {
            margin: px2em(40px) px2em(35px);
        }
    }
</style>
