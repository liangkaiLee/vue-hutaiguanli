import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Users from '@/views/home/users'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { 
      path: '/home', 
      component: Home,
      redirect: '/home/users',
      children: [
        { path: '/home/users', component: Users}
      ],
    },
  ]
})
