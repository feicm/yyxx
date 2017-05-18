<template>
    <div id='feedback'>
        <Topbar :isback="true" :title="'意见反馈'"></Topbar>
        <mt-radio
                class="page-part"
                title="吐槽一下"
                v-model="value"
                :options="options" />
        <div class="title">问题反馈</div>
        <mt-field placeholder="感谢您使用助学英语，使用过程中有任何意见或者建议，请反馈给我们。（字数300字以内）" v-model="agreement_content" type="textarea" rows="8"></mt-field>
        <div class="submit">
            <mt-button @click.native="submit" size="large" type="primary">提交</mt-button>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Topbar from '../topbar/Main.vue';
  import { Field , Radio , Toast } from 'mint-ui';
  import API from '../../api/API'
  import Store from 'store'
  const api = new API();
  Vue.component(Radio.name, Radio);
  Vue.component(Field.name, Field);

  export default {
    beforeMount(){
        this.userId=this.$store.getters.userInfo.user_id;
    },
    data () {
      return {
        value: '内容太少，找不到想要的',
        agreement_content:''
      };
    },
    created(){
      this.options = [
        {
          label: '内容太少，找不到想要的',
          value: '内容太少，找不到想要的'
        },
        {
          label: '功能有bug',
          value: '功能有bug'
        },
        {
          label: '单词错误',
          value: '单词错误'
        },
        {
          label: '其他',
          value: '其他'
        },
      ];
    },
    components: {
      Topbar
    },
    methods: {
      submit(){
        api.postAgreement({userId: this.userId,agreementTitle:this.value,agreementContent:this.agreement_content})
          .then(_.bind(function (res) {
            Toast({
              message: '提交成功',
              iconClass: 'mintui mintui-success',
              duration: 1000
            });
            setTimeout(_.bind(function () {
              this.$router.go(-1)
            },this), 1200)
          },this))
          .catch(function (err) {
            console.log(err);
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
