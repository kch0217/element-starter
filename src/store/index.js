import Vue from 'vue'
import Vuex from 'vuex'
import course from './modules/course'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {},
  modules: {
    course
  }
})

export default store