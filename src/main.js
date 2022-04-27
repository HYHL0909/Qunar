// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import store from './store/index.js'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

import fastclick from 'fastclick'
Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
