import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/components/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    }
  ]
})
