import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './css/style.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  render: (h) => h(App)
})