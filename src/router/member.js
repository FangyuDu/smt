import member from '@/components/member/index'
import reg from '@/components/member/reg'
import login from '@/components/member/login'
import info from '@/components/member/info'

export default {
    path: '/member',
    name: '会员',
    component: member,
    redirect: '/member/login',
    children: [
      {
        path: 'reg',
        name: '注册',
        component: reg
      },
      {
        path: 'login',
        name: '登录',
        component: login
      },
      {
        path: 'info',
        name: '个人中心',
        component: info
      }
    ]
}