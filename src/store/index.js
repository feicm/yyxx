import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'
import classGroup from './modules/classgroup'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    user,
    classGroup
  }
});
