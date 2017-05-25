import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: require('../components/routerdispatch/Main.vue')},
    {path: '/home', component: require('../components/home/Main.vue')},
    {path: '/user/info', component: require('../components/user/Main.vue')},
    {path: '/user/recharge', component: require('../components/recharge/Main.vue')},
    {path: '/user/attestation', component: require('../components/attestation/Main.vue')},
    {path: '/user/feedback', component: require('../components/feedback/Main.vue')},
    {path: '/user/classgroup', component: require('../components/classgroup/Main.vue')},
    {path: '/user/classgroup/create', component: require('../components/classgroup/create/Main.vue')},
    {path: '/user/classgroup/join', component: require('../components/classgroup/join/Main.vue')},
    {path: '/user/classgroup/notice/:id', component: require('../components/classgroup/notice/Main.vue')},
    {path: '/user/classgroup/task/:id', component: require('../components/classgroup/task/Main.vue')},
    {path: '/user/classgroup/task/history/:id', component: require('../components/classgroup/task/history/Main.vue')},
    {path: '/user/classgroup/detail/:id', component: require('../components/classgroup/detail/Main.vue')},
    {path: '/default', component: require('../components/default/Main.vue')}
  ]
});
