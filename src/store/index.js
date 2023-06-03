import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import shouyevuex from '@/store/shouye/index'
import homevuex from '@/store/home/home'
const token = localStorage.getItem('token')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token
  },
  modules: {
    shouyevuex,
    homevuex
  },
  //持久化存储
  plugins: [
    createPersistedState({
      // storage: window.localStorage,
      // reducer(state) {
      //   return {
      //     showlist: state.shouyevuex.localsavecity
      //   }
      // }
    })
  ]
})
