import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {userInfo, user_wx} from './data/user';
import {recharge, order} from './data/recharge';
import {agreement} from './data/agreement';
import {authInfo,wxAuthInfo} from './data/auth';
import {classGroupList, classGroupInfo, gradeInfo, textbook,noticeInfo} from './data/classgroup';


export default {
  open() {
    let mock = new MockAdapter(axios);

    //获取用户信息
    mock.onGet('/userInfo/getUserByOpenid').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, user_wx]);
        }, 1000);
      });
    });
    //获取用户信息
    mock.onGet('/userInfo/getUserByUserId').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, userInfo]);
        }, 1000);
      });
    });
    //身份认证
    mock.onPost('/userInfo/authUserInfo').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, authInfo]);
        }, 1000);
      });
    });
    //获取充值列表
    mock.onGet('/goodInfo/getGoodInfos').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, recharge]);
        }, 1000);
      });
    });
    //获取充值列表
    mock.onPost('/orderInfo/saveOrderInfo').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, order]);
        }, 1000);
      });
    });
    //获取充值列表
    mock.onPost('/agreementInfo/saveAgreementInfo').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, agreement]);
        }, 1000);
      });
    });
    mock.onGet('/classInfo/getClassesByUserId').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, classGroupList]);
        }, 1000);
      });
    });
    mock.onGet('/classInfo/getClassMsgByClassId').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, classGroupInfo]);
        }, 1000);
      });
    });
    mock.onGet('/classInfo/exitClass').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, null]);
        }, 1000);
      });
    });
    //加入班群
    mock.onPost('/classInfo/saveUserClass').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, null]);
        }, 1000);
      });
    });
    //创建班群
    mock.onPost('/classInfo/saveClassInfo').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, null]);
        }, 1000);
      });
    });
    mock.onGet('/gradeInfo/getGradeInfos').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, gradeInfo]);
        }, 1000);
      });
    });
    mock.onGet('/gradeInfo/getTextbook').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, textbook]);
        }, 1000);
      });
    });
    mock.onGet('/notifyInfo/getNotifyInfo').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, noticeInfo]);
        }, 1000);
      });
    });
    mock.onPost('/notifyInfo/saveNotifyInfo').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, noticeInfo]);
        }, 1000);
      });
    });
    mock.onPost('/notifyInfo/updateNotifyInfo').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, noticeInfo]);
        }, 1000);
      });
    });
    mock.onPost(/\/utils\/uploadImg\?userId=(\w+)/).reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, null]);
        }, 1000);
      });
    });
    mock.onGet('https://api.weixin.qq.com/sns/oauth2/access_token').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, wxAuthInfo]);
        }, 1000);
      });
    });
  }
};