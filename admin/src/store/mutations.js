import {
  ADD_COUNTER,
  ADD_CART,
  SET_USERINFOR,
  SET_TIME
} from './mutationType.js'

export default {
  [ADD_COUNTER](state,payload) {
    payload.count ++
  },
  [ADD_CART](state,payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  [SET_USERINFOR](state,data) {
    state.userinfo = data
    window.sessionStorage.data = data
  },
  [SET_TIME](state,event) {
    state.time = event
    //console.log(event);
  }
  
}