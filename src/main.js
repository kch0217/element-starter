import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import HighchartsVue from 'highcharts-vue'
import store from './store'

Vue.use(ElementUI)
Vue.use(HighchartsVue)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
