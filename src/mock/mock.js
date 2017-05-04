import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {userInfo,user_wx} from './data/user';
import {recharge,order} from './data/recharge';
import {agreement} from './data/agreement';
import {authInfo} from './data/auth';


export default {
  open() {
    let mock = new MockAdapter(axios);

    //登录
    mock.onPost('/login').reply(config => {
      /*let {username, password} = JSON.parse(config.data);
       return new Promise((resolve, reject) => {
       let user = null;
       setTimeout(() => {
       let hasUser = LoginUsers.some(u => {
       if (u.username === username && u.password === password) {
       user = JSON.parse(JSON.stringify(u));
       user.password = undefined;
       return true;
       }
       });

       if (hasUser) {
       resolve([200, {code: 200, msg: '请求成功', user}]);
       } else {
       resolve([200, {code: 500, msg: '账号或密码错误'}]);
       }
       }, 1000);
       });*/
    });

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
    mock.onGet('/v0.1/goods').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, recharge]);
        }, 1000);
      });
    });
  //获取充值列表
    mock.onPost('/v0.1/order').reply(config => {
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
  }
};