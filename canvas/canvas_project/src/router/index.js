import Vue from 'vue'
import Router from 'vue-router'
import CanvasPage from '@/views/canvas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: CanvasPage.name,
      component: CanvasPage
    }
  ]
})
