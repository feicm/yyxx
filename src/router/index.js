import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Main.vue'
import User from '../components/user/Main.vue'
import Recharge from '../components/recharge/Main.vue'
import Feedback from '../components/feedback/Main.vue'
import Attestation from '../components/attestation/Main.vue'
import ClassGroup from '../components/classgroup/Main.vue'
import ClassGroupCreate from '../components/classgroup/create/Main.vue'
import ClassGroupJoin from '../components/classgroup/join/Main.vue'
import ClassGroupDetail from '../components/classgroup/detail/Main.vue'
import ClassGroupNotice from '../components/classgroup/notice/Main.vue'
import ClassGroupTaskList from '../components/classgroup/task/Main.vue'
import ClassGroupTaskListHistory from '../components/classgroup/task/history/Main.vue'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/user/info', component: User },
    { path: '/user/recharge', component: Recharge },
    { path: '/user/attestation', component: Attestation },
    { path: '/user/feedback', component: Feedback },
    { path: '/user/classgroup', component: ClassGroup },
    { path: '/user/classgroup/create', component: ClassGroupCreate },
    { path: '/user/classgroup/join', component: ClassGroupJoin },
    { path: '/user/classgroup/notice/:id', component: ClassGroupNotice },
    { path: '/user/classgroup/task/:id', component: ClassGroupTaskList },
    { path: '/user/classgroup/task/history/:id', component: ClassGroupTaskListHistory },
    { path: '/user/classgroup/detail/:id', component: ClassGroupDetail }
  ]
});
