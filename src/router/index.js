import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

let routes = [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
]

import member from './member'
routes.push(member)

export default new Router({
  routes
})
