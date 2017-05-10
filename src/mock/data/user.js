import Mock from 'mockjs';
const userInfo = {
  "nick_name": Mock.Random.cname(), //昵称
  "headimgurl": "",
  "user_id": "23",
  "mobile": "15985779153",
  "user_name": "123", //真实姓名
  "role_id": "3",
  "balance": "100", //余额
  "sex": Mock.Random.integer(1, 2), // 0或空未知，1男 2女
  "signature": "签名",
  "open_id": "",
  "isAuth":1
};
const user_wx = {
  "userId": "37202589871243264",
  "openid": "okOB6w9oW_sytNIG3l2lY6iZ1Vf0",
  "subscribe": 1,
  "nickname": "Alt.lin",
  "headimgurl": "http://wx.qlogo.cn/mmopen/cuHGmndbqsOaEg8fw9kYlto3RuKXJzjGmib6RFH9nurdIW21HfIWmlomeNeb2XD0ctVYPXFeo2ic6I4zicHSbYtAD1icr1onGqYT/0",
  "subscribeTime": "1492069788",
  "userName": "林",
  "gender": 1,
  "state": "1",
  "phone": "15605919299",
  "createTime": "2017-04-13 15:49:48",
  "signature": null,
  "loginName": null,
  "passWord": null,
  "balance": null,
  "roleId": "1",
  "roleName": "学生",
  "isAuth":1,
  "parentName": null
}
export {userInfo,user_wx};
