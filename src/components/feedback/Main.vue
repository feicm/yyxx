<template>
    <div id='feedback'>
        <Topbar></Topbar>
        <mt-radio
                class="page-part"
                title="吐槽一下"
                v-model="value1"
                :options="options" />
        <div class="title">问题反馈</div>
        <mt-field placeholder="感谢您使用助学英语，使用过程中有任何意见或者建议，请反馈给我们。（字数300字以内）" type="textarea" rows="8"></mt-field>
        <div class="submit">
            <mt-button @click.native="submit" size="large" type="primary">提交</mt-button>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Topbar from '../topbar/Main.vue';
  import { Field , Radio , Toast } from 'mint-ui';
  Vue.component(Radio.name, Radio);
  Vue.component(Field.name, Field);

  export default {
    beforeMount(){

    },
    data () {
      return {
        value1: 1,
        value2: 2,
        value3: 3,
        value4: 4,
      };
    },
    created(){
      this.options = [
        {
          label: '内容太少，找不到想要的',
          value: 1,
        },
        {
          label: '功能有bug',
          value: 2
        },
        {
          label: '单词错误',
          value: 3
        },
        {
          label: '其他',
          value: 4
        },
      ];
    },
    components: {
      Topbar
    },
    methods: {
      submit(name){
        Toast({
          message: '提交成功',
          iconClass: 'mintui mintui-success'
        });
      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #feedback {
        padding-top: px2em(95px);
        background-color: $color-default-background;
        .title{
            margin: 8px;
            color:#888;
        }
        .submit{
            margin:px2em(40px) px2em(35px);
        }
    }

</style>
