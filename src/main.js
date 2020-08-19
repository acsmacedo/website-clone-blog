import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './scss/style.css'
import './assets/boxicons/css/boxicons.min.css'
import Vue2Filters from 'vue2-filters'
 
Vue.use(Vue2Filters)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
