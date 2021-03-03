import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI , { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/global.css'
import './assets/css/fonts/iconfont.css'
import './assets/css/base.css'
import './assets/css/normalize.css'

Vue.use(ElementUI)
Vue.prototype.$message = Message

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
