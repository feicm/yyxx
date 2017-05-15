import Vue from 'vue';
import Router from 'vue-router';

const RouterDispatch = r => require.ensure([], () => r(require('../components/routerdispatch/Main.vue')), 'dispatch')
const Home = r => require.ensure([], () => r(require('../components/home/Main.vue')), 'home')
const User = r => require.ensure([], () => r(require('../components/user/Main.vue')), 'user')
const Recharge = r => require.ensure([], () => r(require('../components/recharge/Main.vue')), 'recharge')
const Feedback = r => require.ensure([], () => r(require('../components/feedback/Main.vue')), 'feedback')
const Attestation = r => require.ensure([], () => r(require('../components/attestation/Main.vue')), 'class-group')
const ClassGroup = r => require.ensure([], () => r(require('../components/classgroup/Main.vue')), 'class-group')
const ClassGroupCreate = r => require.ensure([], () => r(require('../components/classgroup/create/Main.vue')), 'class-group')
const ClassGroupJoin = r => require.ensure([], () => r(require('../components/classgroup/join/Main.vue')), 'class-group')
const ClassGroupDetail = r => require.ensure([], () => r(require('../components/classgroup/detail/Main.vue')), 'class-group')
const ClassGroupNotice = r => require.ensure([], () => r(require('../components/classgroup/notice/Main.vue')), 'class-group')
const ClassGroupTaskList = r => require.ensure([], () => r(require('../components/classgroup/task/Main.vue')), 'class-group')
const ClassGroupTaskListHistory = r => require.ensure([], () => r(require('../components/classgroup/task/history/Main.vue')), 'class-group')
const Default = r => require.ensure([], () => r(require('../components/default/Main.vue')), 'default')

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: RouterDispatch},
    {path: '/home', component: Home},
    {path: '/user/info', component: User},
    {path: '/user/recharge', component: Recharge},
    {path: '/user/attestation', component: Attestation},
    {path: '/user/feedback', component: Feedback},
    {path: '/user/classgroup', component: ClassGroup},
    {path: '/user/classgroup/create', component: ClassGroupCreate},
    {path: '/user/classgroup/join', component: ClassGroupJoin},
    {path: '/user/classgroup/notice/:id', component: ClassGroupNotice},
    {path: '/user/classgroup/task/:id', component: ClassGroupTaskList},
    {path: '/user/classgroup/task/history/:id', component: ClassGroupTaskListHistory},
    {path: '/user/classgroup/detail/:id', component: ClassGroupDetail},
    {path: '/default', component: Default}
  ]
});
