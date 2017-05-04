<template>
    <div id='cgCreate'>
        <Topbar></Topbar>
        <div class="img">
            <img src="../../../assets/images/view/class_group_top_icon_establish.png">
        </div>
        <div class="form">
            <mt-field label="学校" placeholder="请输入学校名字"></mt-field>
            <mt-cell
                    title="年级"
                    is-link
                    :value="radioGrade.selectedName" @click.native="select('Grade')">
            </mt-cell>
            <mt-field label="班级" placeholder="请输入所在班级，例：二班"></mt-field>
            <mt-field label="学年开始时间" placeholder="请选择学年开始时间" disabled @click.native="open('startTime')"
                      :value="showTime.start"></mt-field>
            <mt-field label="学年结束时间" placeholder="请选择学年结束时间" disabled @click.native="open('endTime')"
                      :value="showTime.end"></mt-field>
            <mt-field label="老师姓名" placeholder="请输入老师姓名"></mt-field>
            <mt-field label="座位号" placeholder="请输入座位号"></mt-field>
            <mt-cell
                    title="教材版本"
                    is-link
                    :value="radioEdition.selectedName" @click.native="select('Edition')">
            </mt-cell>
        </div>
        <div class="submit">
            <mt-button @click.native="submit" size="large" type="primary" disabled>提交</mt-button>
        </div>
        <mt-datetime-picker
                ref="startTime"
                type="date"
                v-model="startTime"
                @confirm="startTimeHandleChange">
        </mt-datetime-picker>
        <mt-datetime-picker
                ref="endTime"
                type="date"
                v-model="endTime"
                @confirm="endTimeHandleChange">
        </mt-datetime-picker>
        <mt-popup v-model="popupGrade" position="right" class="mint-popup-3" :modal="false">
            <mt-header fixed title="年级">
                <mt-button @click.native="back" slot="left" icon="back"></mt-button>
            </mt-header>
            <mt-radio
                    align="right"
                    v-model="radioGrade.value"
                    :options="radioGrade.options"
                    @change="changeGrade"
            >
            </mt-radio>
        </mt-popup>
        <mt-popup v-model="popupEdition" position="right" class="mint-popup-3" :modal="false">
            <mt-header fixed title="教材版本">
                <mt-button @click.native="back" slot="left" icon="back"></mt-button>
            </mt-header>
            <mt-radio
                    align="right"
                    v-model="radioEdition.value"
                    :options="radioEdition.options"
                    @change="changeEdition"
            >
            </mt-radio>
        </mt-popup>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Field,Radio} from 'mint-ui';
  import Topbar from '../../topbar/Main.vue';
  import Moment from 'moment'
  //import Radio from '../../radio/Main.vue'
  import _ from 'lodash'
  Vue.component(Radio.name, Radio);

  export default {
    beforeMount(){
    },
    data () {
      const now = new Date();
      const nowShow = Moment().format("YYYY 年 MM 月");
      return {
        showTime: {
          start: nowShow,
          end: nowShow
        },
        startTime: now,
        endTime: now,
        version: '人教版',
        popupGrade: false,
        popupEdition: false,
        radioGrade: {
          name: 'grade',
          value: '',
          selectedName: '请选择年级',
          options: [
            {
              label: '一年级',
              value: 'g_1'
            },
            {
              label: '二年级',
              value: 'g_2'
            },
            {
              label: '三年级',
              value: 'g_3'
            },
            {
              label: '四年级',
              value: 'g_4'
            },
            {
              label: '五年级',
              value: 'g_5'
            },
            {
              label: '六年级',
              value: 'g_6'
            },
            {
              label: '初一年级',
              value: 'g_7'
            },
            {
              label: '初二年级',
              value: 'g_8'
            },
            {
              label: '初三年级',
              value: 'g_9'
            },
            {
              label: '高一年级',
              value: 'g_10'
            },
            {
              label: '高二年级',
              value: 'g_11'
            },
            {
              label: '高三年级',
              value: 'g_12'
            },
          ]
        },
        radioEdition: {
          name: 'edition',
          value: '',
          selectedName: '请选择教材版本',
          options: [
            {
              label: '闽教版',
              value: 'tb_mj'
            },
            {
              label: '人教版',
              value: 'tb_mj2'
            },
          ]
        },
      }
    },
    watch: {
      'radioGrade.value'(){
        if(!this.radioGrade.value){
          return
        }
        this.radioGrade.selectedName = _.first(_.filter(this.radioGrade.options, _.bind(function (item) {
          return item.value === this.radioGrade.value
        }, this)))['label']
      },
      'radioEdition.value'(){
        if(!this.radioEdition.value){
          return
        }
        this.radioEdition.selectedName = _.first(_.filter(this.radioEdition.options, _.bind(function (item) {
          return item.value === this.radioEdition.value
        }, this)))['label']
      },
    },
    computed: {},
    components: {
      Topbar,
      Field,
      Radio
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      startTimeHandleChange(value){
        this.startTime = value;
        this.showTime.start = Moment(this.startTime).format("YYYY 年 MM 月");
      },
      endTimeHandleChange(value){
        this.endTime = value;
        this.showTime.end = Moment(this.endTime).format("YYYY 年 MM 月");
      },
      select(name){
        this['popup'+name] = true;
      },
      back(){
        this.popupGrade=false;
        this.popupEdition=false;
      },
      changeGrade(){
        this.popupGrade=false;
        this.radioEdition.value=''
        this.radioEdition.selectedName='请选择教材版本'
      },
      changeEdition(){
        this.popupEdition=false;
      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../assets/css/vars.scss';
    @import '../../../assets/css/function.scss';

    #cgCreate {
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
        .picker-slot:nth-child(3) {
            display: none;
        }
        .form {
            .mint-cell {
                height: px2em(88px);
            }
            .mint-cell-allow-right::after {
                border-color: $color-blue;
            }
            a {
                text-decoration-line: none;
            }
        }
        .mint-popup-3 {
            width: 100%;
            height: 100%;
            background-color: #fff;
            .mint-header {
                background-color: $color-topbar;
                height: px2em(96px);
                @include font-dpr(12px);
                background-color: $color-topbar;
                .mint-header-title{
                    @include font-dpr(18px);
                }
            }
            .mint-radiolist{
                margin-top:px2em(95px);
            }
        }
    }
</style>
