import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI , { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from 'server/api';

import './assets/css/global.css'
import './assets/css/fonts/iconfont.css'

Vue.use(ElementUI)
Vue.prototype.$message = Message
Vue.prototype.$api = api

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
