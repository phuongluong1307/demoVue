// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Select2 from 'v-select2-component';
 
Vue.component('Select2', Select2);

Vue.config.productionTip = false

import '../package/global/_globals'
import '../package/Admin/dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue2-datepicker/index.css'
import '@/assets/font-awesome/css/all.css'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
