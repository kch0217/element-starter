import Vue from 'vue'


export default {
  namespaced: true,
  state: {
    courses: []
  },
  mutations: {
    set_course_list(state, courses) {
      Vue.set(state, 'courses', courses)
    }
  },
  actions: {
    async getCourseList (context) {
      const courses = await Vue.$api.course.getCourseList()
      context.commit('set_course_list', courses)
    }
  }
}
