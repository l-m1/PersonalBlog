import Vue from 'vue'
import Vuex from 'vuex'

import Storage from "utils/storage.js";
Vue.use(Vuex)
//导入文件
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

const state = {
  cartList:[],
  userinfo:'',
  time:''
}
//创建store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

//导出store
export default store