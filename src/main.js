import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import store from './vuex'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/basic.scss'
Vue.config.productionTip = false

Vue.use(elementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
