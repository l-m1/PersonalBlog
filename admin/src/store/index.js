import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//导入文件
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

const state = {
  userinfo:{},
  token:'',
  ruleForm: {
    id: "",
    title: "",
    des: "",
    type: "",
    create_at:'',
    updata_at:'',
    user_id:'',
    user_info:'',
  },
  TIME_COUNT:60,
  issuccess:false,
  article:{},
  personalarticle:{},
  imgSrc_qr_code:require('assets/image/QRcode.jpg')
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