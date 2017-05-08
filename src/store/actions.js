import * as types from './types'
import API from '../api/API';
const api = new API();
async function getInfoByUserId({commit},param) {
  commit(types.GET_INFO_BY_USERID, await api.getUserInfoByUserid(param));
}
async function getInfoByOpenId({commit},param) {
  console.log(param)
  commit(types.GET_INFO_BY_OPENID, await api.getUserInfoByOpenid(param));
}
export default {
  getInfoByUserId,
  getInfoByOpenId
}