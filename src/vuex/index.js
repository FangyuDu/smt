import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  userInfo: null
}
const mutations = {
  setUserInfo (state, obj) {
    state.userInfo = obj
  }
}
export default new Vuex.Store({
  state
})