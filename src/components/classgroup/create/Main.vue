<template>
    <div id='cgCreate'>
        <Topbar :isback="true" :title="'创建班群'"></Topbar>
        <div class="img">
            <img src="../../../assets/images/view/class_group_top_icon_establish.png">
        </div>
        <div class="form">
            <mt-field label="学校" placeholder="请输入学校名字" v-model="school_name" :state="schoolNameState"></mt-field>
            <mt-cell
                    title="年级"
                    is-link
                    :value="radioGrade.selectedName" @click.native="select('Grade')">
            </mt-cell>
            <mt-field label="班级" placeholder="请输入所在班级，例：二班" v-model="class_name" :state="classState"></mt-field>
            <mt-field label="学年开始时间" placeholder="请选择学年开始时间" disabled @click.native="open('startTime')"
                      :value="showTime.start"></mt-field>
            <mt-field label="学年结束时间" placeholder="请选择学年结束时间" disabled @click.native="open('endTime')"
                      :value="showTime.end"></mt-field>
            <mt-field v-if="role_id!==3" label="老师姓名" v-model="teacher_name" :state="teacherNameState"
                      placeholder="请输入老师姓名"></mt-field>
            <mt-field v-if="role_id!==3" label="座位号" v-model="place_id" :state="placeIdState"
                      placeholder="请输入座位号"></mt-field>
            <mt-cell v-if="radioEdition.options.length && gradeSelected"
                     title="教材版本"
                     is-link
                     :value="radioEdition.selectedName" @click.native="select('Edition')">
            </mt-cell>
        </div>
        <div class="submit">
            <mt-button v-if='actived' @click.native="submit" size="large" type="primary">提交</mt-button>
            <mt-button v-else size="large" type="primary" disabled>提交</mt-button>
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
            <div class="radio-w">
                <mt-radio
                        align="right"
                        v-model="radioGrade.value"
                        :options="radioGrade.options"
                        @change="changeGrade"
                >
                </mt-radio>
            </div>
        </mt-popup>
        <mt-popup v-model="popupEdition" position="right" class="mint-popup-3" :modal="false">
            <mt-header fixed title="教材版本">
                <mt-button @click.native="back" slot="left" icon="back"></mt-button>
            </mt-header>
            <div class="radio-w">
                <mt-radio
                        align="right"
                        v-model="radioEdition.value"
                        :options="radioEdition.options"
                        @change="changeEdition"
                >
                </mt-radio>
            </div>
        </mt-popup>
    </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import {Field, Radio, DatetimePicker, Popup, Toast, MessageBox} from 'mint-ui';
  import Topbar from '../../topbar/Main.vue';
  import Moment from 'moment'
  import Store from 'store'
  import API from '../../../api/API'
  const api = new API()
  import * as types from '../../../store/types'

  //import Radio from '../../radio/Main.vue'
  import _ from 'lodash'
  Vue.component(Radio.name, Radio);
  Vue.component(Field.name, Field)
  Vue.component(DatetimePicker.name, DatetimePicker);
  Vue.component(Popup.name, Popup);

  export default {
    beforeMount(){
      if (Store.get('__YYXXAPP_roleId__') - 0 === 2) {
        MessageBox.alert('家长不能创建班群哦！').then(action => {
          this.$router.go(-1)
        });
      }
      if (_.isEmpty(this.gradeInfo)) {
        this.$store.dispatch('getGradeInfos');
      } else {
        this.radioGrade.options = this.gradeInfo;
        this.radioEdition.options = this.textBook;
      }
      if (!this.radioGrade.value) {
        this.gradeSelected = false
      }
    },
    data () {
      const now = new Date();
      const nowShow = Moment().format("YYYY 年 MM 月");
      const {userId, roleId, userName, isAuth}=this.$store.getters.wx_userInfo;
      return {
        user_id: userId || Store.get('__YYXXAPP_USERID__'),
        user_name: userName,
        isAuth: isAuth || Store.get('__YYXXAPP_isAuth__'),
        actived: false,
        school_name: '',
        schoolNameState: '',
        class_name: '',
        classState: '',
        teacher_name: (roleId || Store.get('__YYXXAPP_roleId__')) - 0 === 3 ? userName : '',
        teacherNameState: '',
        gradeSelected: false,
        role_id: (roleId || Store.get('__YYXXAPP_roleId__')) - 0,
        place_id: (roleId || Store.get('__YYXXAPP_roleId__')) - 0 === 3 ? 0 : '',
        placeIdState: '',
        showTime: {
          start: nowShow,
          end: nowShow
        },
        startTime: now,
        endTime: now,
        popupGrade: false,
        popupEdition: false,
        radioGrade: {
          name: 'grade',
          value: '',
          selectedName: '请选择年级',
          options: []
        },
        radioEdition: {
          name: 'edition',
          value: '',
          selectedName: '请选择教材版本',
          options: []
        },
      }
    },
    watch: {
      'radioGrade.value'(){
        if (!this.radioGrade.value) {
          return
        }
        this.radioGrade.selectedName = _.nth(this.radioGrade.options, _.findIndex(this.radioGrade.options, o => {
          return o.value === this.radioGrade.value
        }))['label']
        this.gradeSelected = true;
      },
      'radioEdition.value'(){
        if (!this.radioEdition.value) {
          return
        }
        this.radioEdition.selectedName = _.nth(this.radioEdition.options, _.findIndex(this.radioEdition.options, o => {
          return o.value === this.radioEdition.value
        }))['label']
        this.actived = this.checkInput()
      },
      gradeInfo(val){
        this.radioGrade.options = val
      },
      textBook(val){
        this.radioEdition.options = val
      },
      school_name(val){
        this.schoolNameState = this.checkState(val)
      },
      class_name(val){
        this.classState = this.checkState(val)
      },
      teacher_name(val){
        this.teacherNameState = this.checkState(val)
      },
      place_id(val){
        this.placeIdState = this.checkState(val, /^\+?[1-9][0-9]*$/)
      },
      schoolNameState(){
        this.actived = this.checkInput()
      },
      classState(){
        this.actived = this.checkInput()
      },
      teacherNameState(){
        this.actived = this.checkInput()
      },
      placeIdState(){
        this.actived = this.checkInput()
      },
    },
    computed: {
      textBook(){
        const options = [];
        _.map(this.$store.getters.textBook, function (v) {
          options.push({
            value: v.bookId + '_' + v.serialId,
            label: v.bookName + v.serialName
          })
        });
        return options
      },
      gradeInfo(){
        const options = [];
        _.map(this.$store.getters.gradeInfo, function (v) {
          options.push({
            value: v.gradeId,
            label: v.gradeName
          })
        });
        return options
      }
    },
    components: {
      Topbar,
    },
    methods: {
      checkInput(){
        let result = this.schoolNameState === 'success'
          && this.classState === 'success'
          && !!this.radioEdition.value;
        if (this.role_id !== 3) {
          result = result && this.placeIdState === 'success' && this.teacherNameState === 'success';
        }
        return result;
      },
      checkState(val, reg){
        val = _.trim(val);
        if (reg) {
          return val && reg.test(val) ? 'success' : 'error';
        } else {
          return val ? 'success' : 'error';
        }
      },
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
        this['popup' + name] = true;
      },
      back(){
        this.popupGrade = false;
        this.popupEdition = false;
      },
      changeGrade(){
        this.popupGrade = false;
        this.radioEdition.value = '';
        this.radioEdition.selectedName = '请选择教材版本';
        this.$store.commit(types.REMOVE_TEXTBOOK);
        this.actived = false;
        this.$store.dispatch('getTextbook', {
          gradeId: this.radioGrade.value
        }).then(()=>{
          if(_.isEmpty(this.$store.getters.textBook)){
            MessageBox.alert('暂时没有「'+this.radioGrade.selectedName+'」的教材版本，请重新选择其他年级！')
            this.radioGrade.value = '';
            this.radioGrade.selectedName = '请选择年级';
          }
        }).catch(()=>{
          MessageBox.alert('获取「'+this.radioGrade.selectedName+'」教材版本失败，请检查您的网络连接或联系管理员！')
          this.radioGrade.value = '';
          this.radioGrade.selectedName = '请选择年级';
        })
      },
      changeEdition(){
        this.popupEdition = false;
      },
      submit(){
          /*userId：用户编号
           roleId: 1
           schoolName：学校名称
           gradeId：年级
           serialId：册
           className：班级名称
           startDate：开始时间
           endDate：结束时间
           teacherName：老师名称 (如果创建者是老师，此项不填，直接获取认证的姓名，前端不要展示这个填写)
           place：座位号 (如果创建者是老师，默认给个座号0，前端不要展示这行填写)
           bookId:教材版本*/
        const tId = this.radioEdition.value.split('_')
        const param = {
          userId: this.user_id,
          roleId: this.role_id,
          schoolName: this.school_name,
          gradeId: this.radioGrade.value,
          serialId: tId[1],
          className: this.class_name,
          startDate: this.startTime,
          endDate: this.endTime,
          teacherName: this.teacher_name,
          place: this.place_id,
          bookId: tId[0]
        };
        api.createClassGroup(param).then((resp) => {
          if (resp.data.code === 'YYXX/REQUIRE_SUCCESS') {
            Toast({
              message: '班群创建成功！',
              iconClass: 'mintui mintui-success',
              duration: 1000
            });
            setTimeout(() => {
              this.$router.go(-1)
            }, 1200)
          } else {
            MessageBox.alert(resp.data.msg)
          }
        })
      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../../assets/css/vars.scss';
    @import '../../../assets/css/function.scss';

    #cgCreate {
        padding-top: px2em(95px);
        background-color: #fff;
        .img {
            text-align: center;
            img {
                margin: px2em(40px) auto px2em(60px);
                width: px2em(110px);
                height: px2em(80px);
            }
        }
        .submit {
            padding: px2em(40px) px2em(35px);
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
                background-color: $color-blue;
                height: px2em(96px);
                @include font-dpr(12px);
                .mint-header-title {
                    @include font-dpr(18px);
                }
            }
            .radio-w {
                height: 100%;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                .mint-radiolist {
                    padding-top: px2em(95px);
                    margin-bottom: px2em(95px);
                }
            }
        }
    }
</style>
