import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Note from '@/components/note'
import Login from '@/components/login/login'
import Reg from '@/components/login/reg'
import File from '@/components/File'
import User from '@/components/user'
Vue.use(Router)

let routes = [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/note',
          name: 'Note',
          component: Note
        },
        {
          path: '/file',
          name: 'File',
          component: File
        },
        {
          path: 'user',
          name: 'user',
          component: User
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    }  
]

const router = new Router({
  routes
})

export default router