import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Home from './components/home/Main.vue'
import User from './components/user/Main.vue'
import Recharge from './components/recharge/Main.vue'
import Feedback from './components/feedback/Main.vue'
import Attestation from './components/attestation/Main.vue'
Vue.use(VueRouter);
Vue.use(MintUI)


const routes = [
	{ path: '/', component: Home },
	{ path: '/user/info', component: User },
	{ path: '/user/recharge', component: Recharge },
	{ path: '/user/attestation', component: Attestation }
]

const router = new VueRouter({
  routes 
})

const app = new Vue({
	router,
	render:h=>h(App)
}).$mount('#app')

