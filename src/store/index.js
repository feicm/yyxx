import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import * as types from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations: {
    [types.GET_INFO_BY_USERID](state, userInfo){
      state.userInfo = userInfo;
    },
    [types.GET_INFO_BY_OPENID](state, userInfo){
      state.wx_userInfo = userInfo;
    }
  }
});
