import * as types from '../types'
import API from '../../api/API';
const api = new API();

const state = {
  user_info: {},
  wx_user_info:{}
}

const getters = {
  userInfo: state => state.user_info,
  wx_userInfo: state => state.wx_user_info,
};

const actions = {
  async getInfoByUserId({commit},param) {
    commit(types.GET_INFO_BY_USERID, await api.getUserInfoByUserid(param));
  },
  async getInfoByOpenId({commit},param) {
    commit(types.GET_INFO_BY_OPENID, await api.getUserInfoByOpenid(param));
  }
};

const mutations = {
  [types.GET_INFO_BY_USERID](state, payload){
    state.user_info = payload.data.data;
  },
  [types.GET_INFO_BY_OPENID](state, payload){
    state.wx_user_info = payload.data.data;
  },
  [types.CHANGE_AUTH_STATE](state){
    state.user_info.isAuth = 1
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}