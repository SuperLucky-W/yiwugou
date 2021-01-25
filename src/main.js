import Vue from 'vue'
import App from './App.vue'
import router from './router'
//vant 框架
import Vant from 'vant';
import 'vant/lib/index.css';
//移动端换算
import 'lib-flexible';
// 引入axios
import axios from 'axios'
// 引入vuex
import store from './store/store'


Vue.use(Vant);
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')