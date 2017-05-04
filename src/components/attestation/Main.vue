<template>
    <div id='attestation'>
        <Topbar></Topbar>
        <header class="header">
            <a class="portrait">
                <img src="../../assets/images/general_top_icon_approve_logo.png">
            </a>
            <p class="name"><span>助学英语</span></p>
        </header>
        <mt-field placeholder="输入真实姓名" type="text" v-model="user_name">
            <img src="../../assets/images/view/attestation_import_username.png">
        </mt-field>
        <mt-field placeholder="输入手机号码" type="tel" v-model="mobile">
            <img src="../../assets/images/view/attestation_import_tel_number.png">
        </mt-field>
        <div class="select-list">
            <ul>
                <li class="item">
                    <a @click.stop="selectRole('student')">
                        <img v-if="role.student.select"
                             src="../../assets/images/view/attestation_import_identity_student_pressed.png">
                        <img v-else src="../../assets/images/view/attestation_import_identity_student_normal.png">
                        <b class="name">学生</b>
                    </a>
                </li>
                <li class="item">
                    <a @click.stop="selectRole('patriarch')">
                        <img v-if="role.patriarch.select"
                             src="../../assets/images/view/attestation_import_identity_patriarch_pressed.png">
                        <img v-else src="../../assets/images/view/attestation_import_identity_patriarch_normal.png">
                        <b class="name">家长</b>
                    </a>
                </li>
                <li class="item">
                    <a @click.stop="selectRole('teacher')">
                        <img v-if="role.teacher.select"
                             src="../../assets/images/view/attestation_import_identity_teacher_pressed.png">
                        <img v-else src="../../assets/images/view/attestation_import_identity_teacher_normal.png">
                        <b class="name">老师</b>
                    </a>
                </li>
            </ul>
        </div>
        <div class="submit">
            <p class="tips">注意：认证信息不能修改</p>
            <mt-button @click.native="submit" size="large" type="primary" disabled>提交</mt-button>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Cell, Field,Toast} from 'mint-ui';
  import Topbar from '../topbar/Main.vue';
  import _ from 'lodash';

  Vue.component(Cell.name, Cell);
  Vue.component(Field.name, Field);

  export default {
    beforeMount(){

    },
    data () {
      return {
        user_name: '',
        mobile: '',
        role: {
          student: {
            text: '学生',
            select: true,
            id: 1,
          },
          patriarch: {
            text: '家长',
            select: false,
            id: 2,
          },
          teacher: {
            text: '老师',
            select: false,
            id: 3,
          },
        }
      }
    },
    watch: {
      mobile(){
        console.log(23423)
        if(!(/^1[34578]\d{9}$/.test(this.mobile))){
          Toast({
            position: 'top',
            message: '请填写正确的手机号码！'
          });
          return '';
        }
        return this.mobile
      }
    },
    computed: {

    },
    components: {
      Topbar
    },
    methods: {
      selectRole(roleName){
        _.each(this.role, function (item) {
          item.select = false
        })
        this.role[roleName].select = !this.role[roleName].select
      }
    }
  }


</script>

<style lang="scss" rel="stylesheet/scss">
    @import '../../assets/css/vars.scss';
    @import '../../assets/css/function.scss';

    #attestation {
        padding-top: px2em(95px);
        background-color: #fff;
        .header {
            text-align: center;
            height: px2em(300px);
            background-size: contain;
            margin-bottom: px2em(34px);
            .portrait {
                display: inline-block;
                margin-top: px2em(28px);
                width: px2em(126px);
                height: px2em(126px);
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .name {
                margin-top: px2em(15px);
                color: $color-blue;
                span {
                    @include font-dpr(20px);

                }
            }
        }
        .mint-cell {
            .mint-field-other {
                position: absolute;
                left: 10px;
                top: 13px;
                width: 22px;
            }
            img {
                width: 22px;
                height: 22px;
            }
            .mint-cell-value {
                padding-left: 32px;
            }
        }
        .select-list {
            border-bottom: px2em(1px) solid #ddd;
            margin: px2em(30px) 10px;
            padding-bottom: px2em(48px);
            ul {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: flex-start;
                align-content: stretch;
                li {
                    flex: 1;
                    text-align: center;
                    a {
                        display: inline-block;
                        text-decoration-line: none;
                        width: px2em(130px);
                        img {
                            max-width: 100%;
                            max-height: 100%;
                            margin-bottom: px2em(15px);
                        }
                        .name {
                            color: #999;
                            @include font-dpr(17);
                        }
                    }
                }
            }
        }
        .submit {
            margin: px2em(40px) px2em(35px);
            .tips {
                text-align: center;
                color: #999;
                @include font-dpr(17px);
                margin-bottom: px2em(94px);
            }
        }
    }

</style>
