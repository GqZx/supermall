import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import FastClick from 'fastclick'

Vue.config.productionTip = false

//解决移动端300延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
