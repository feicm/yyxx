import axios from 'axios'
import config from './config'

class API {
  getUserOpenId(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/utils/authAccessToken',config);
  }
	getUserInfoByOpenid(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/userInfo/getUserByOpenid',config);
	}
  getUserInfoByUserid(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/userInfo/getUserByUserId',config);
  }
  userIdentity(param){
    config.data = param;
    return axios.post('/userInfo/authUserInfo',{},config);
  }
  getRechargeGoods(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/goodInfo/getGoodInfos',config);
  }
  getOrderInfo(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/v0.1/order/{order_id}',config);
  }
  createOrder(param){
    config.data = param;
    return axios.post('/orderInfo/saveOrderInfo',{},config);
  }
  createClassGroup(param){
    config.data= param;
    return axios.post('/classInfo/saveClassInfo',{},config);
  }
  joinClassGroup(param){
    config.data = param;
    return axios.post('/classInfo/saveUserClass',{},config);
  }
  exitClassGroup(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/classInfo/exitClass',config);
  }
  getClassGroupList(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/classInfo/getClassesByUserId',config);
  }
  getClassGroupInfo(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/classInfo/getClassMsgByClassId',config);
  }
  getGrade(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/gradeInfo/getGradeInfos',config);
  }
  getTextbookVersion(param){
    alert('合并前'+JSON.stringify(param))
    config.params = Object.assign(config.params,param);
    alert('合并后'+JSON.stringify(config.params))
    return axios.get('/textbookInfo/getTextbooks',config);
  }
  getTaskList(param){
    config.data= param;
    return axios.post('/v0.1/task',{},config);
  }
  getNewestTaskList(param){
    config.data= param;
    return axios.post('/v0.1/task/{class_id}',{},config);
  }
  getTaskHistory(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/v0.1/classgroup/task/{class_id}/{user_id}',config);
  }
  getNotice(param){
    config.params = Object.assign(config.params,param);
    return axios.get('/notifyInfo/getNotifyInfo',config);
  }
  saveNotice(param){
    config.data= param;
    return axios.post('/notifyInfo/saveNotifyInfo',{},config);
  }
  editNotice(param){
    config.data= param;
    return axios.post('/notifyInfo/updateNotifyInfo',{},config);
  }

  postAgreement(param){
    config.data= param;
    return axios.post('/agreementInfo/saveAgreementInfo',{},config);
  }
}
export default API;
