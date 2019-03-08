// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './styles/index.scss' // 所有组件样式加载完后再加载系统样式以防止覆盖
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import components from './components'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(components)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
