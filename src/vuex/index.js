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
const getters = {
  userInfo: (state)  => state.userInfo
}
const actions = {
  setUserInfo ({commit}, obj) {
    // console.log(state, obj);
    commit('setUserInfo', obj)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})