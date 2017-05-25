import Mock from 'mockjs';
const authInfo = {
  "user_id":"12355",
  "identity_key": "ssdfdsfgfdg" //用于标识用户已认证
};
const wxAuthInfo={
  code:'',
  msg:'',
  data:{
    "access_token":"ACCESS_TOKEN",
    "expires_in":7200,
    "refresh_token":"REFRESH_TOKEN",
    "openid":"okOB6w9oW_sytNIG3l2lY6iZ1Vf0",
    "scope":"SCOPE"
  }
}
export {authInfo,wxAuthInfo};
