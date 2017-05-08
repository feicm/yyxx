import Vue from 'vue'
import App from './App.vue'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import Mock from './mock'

Mock.open();

const app = new Vue({
	store,
	router,
	render:h=>h(App)
}).$mount('#app');

