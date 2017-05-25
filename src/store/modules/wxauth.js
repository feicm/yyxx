import * as types from '../types'
require('../../utils/arg')
const Url = window.Arg;
import API from '../../api/API';
const api = new API();
import * as Msg from '../../utils/msg'

const state = {
  wx_auth_info: {},
  token_info: {}
}

const getters = {
  wxAuthInfo: state => state.wx_auth_info,
  tokenInfo: state => state.token_info,
};

const actions = {
  async getUserOpenId({commit},param) {
    commit(types.GET_USER_OPENID, await api.getUserOpenId(param));
  }
};

const mutations = {
  [types.GET_CODE](state){
    const info = {
      path: location.pathname,
      code: Url('code'),
      state: Url('state')
    }
    state.wx_auth_info = info;
  },
  [types.GET_USER_OPENID](state, payload){
    if (Msg.isError(payload.data)) {
      return
    }
    state.token_info = payload.data.data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}