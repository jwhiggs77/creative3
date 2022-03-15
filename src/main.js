import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import footer from './components/FooterComponent.vue'

Vue.config.productionTip = false

Vue.component('FooterComponent', footer)

let data = {
  teams: mock
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
