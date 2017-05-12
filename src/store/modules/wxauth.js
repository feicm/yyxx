import * as types from '../types'
require('../../utils/arg')
const Url = window.Arg;

const state = {
  wx_auth_info: {}
}

const getters = {
  wxAuthInfo: state => state.wx_auth_info,
};

const actions = {};

const mutations = {
  [types.GET_OPEN_ID](state){
    const info = {
      path: location.pathname,
      code: Url('code'),
      state: Url('state')
    }
    state.wx_auth_info = info;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}