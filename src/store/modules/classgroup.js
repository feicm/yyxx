import * as types from '../types'
import API from '../../api/API';
import _ from 'lodash'
const api = new API();
import * as Msg from '../../utils/msg'

const state = {
  class_group_list: [],
  class_group_info:{},
  class_group_members:[],
  grade_info:[],
  textbook:[],
  notice_info:{}
}

const getters = {
  classGroupList: state => state.class_group_list,
  classGroupInfo: state => state.class_group_info,
  members: state => state.class_group_members,
  gradeInfo:state => _.flatten(_.map(state.grade_info,'list')),
  textBook:state => state.textbook,
  noticeInfo:state => state.notice_info
};

const actions = {
  async getClassesByUserId({commit},param) {
    commit(types.GET_CLASS_GROUP_LIST_BY_USERID, await api.getClassGroupList(param));
  },
  async getClassMsgByClassId({commit},param) {
    commit(types.GET_CLASS_GROUP_INFO_BY_ID, await api.getClassGroupInfo(param));
  },
  async exitClass({commit},param) {
    commit(types.EXIT_CLASS_GROUP_BY_ID, await api.exitClassGroup(param));
  },
  async getGradeInfos({commit},param) {
    commit(types.GET_GRADE_INFOS, await api.getGrade(param));
  },
  async getTextbook({commit},param) {
    commit(types.GET_TEXTBOOK, await api.getTextbookVersion(param));
  },
  async getNotifyInfo({commit},param) {
    commit(types.GET_NOTICE, await api.getNotice(param));
  }
};

const mutations = {
  [types.GET_CLASS_GROUP_LIST_BY_USERID](state, payload){
    if (Msg.isError(payload.data)) {
      return
    }
    state.class_group_list = payload.data.data;
  },
  [types.GET_CLASS_GROUP_INFO_BY_ID](state, payload){
    if (Msg.isError(payload.data)) {
      return
    }
    state.class_group_info = payload.data.data.classInfo;
    state.class_group_members = payload.data.data.members;
  },
  [types.EXIT_CLASS_GROUP_BY_ID](state, payload){
    if (Msg.isError(payload.data)) {
      return
    }
    state.class_group_info = {};
  },
  [types.GET_GRADE_INFOS](state, payload){
    if (Msg.isError(payload.data)) {
      return
    }
    state.grade_info = payload.data.data;
  },
  [types.GET_TEXTBOOK](state, payload){
    if (Msg.isError(payload.data)) {
      return
    }
    state.textbook = payload.data.data;
    console.log(state.textbook)
  },
  [types.REMOVE_TEXTBOOK](state, payload){
    state.textbook = {};
  },
  [types.GET_NOTICE](state, payload){
    if (Msg.isError(payload.data)) {
      return
    }
    state.notice_info = payload.data.data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}