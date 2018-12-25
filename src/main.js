import Vue from 'vue'
import App from './App'
import router from './router'

// 引入完整的element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入index.scss
import '@/styles/index.scss'

// 注册element-ui
Vue.use(ElementUI);

Vue.config.productionTip = false

// 路由的全局导航守卫
router.beforeEach((to, from, next) => {
  // 通过本地存储的token来校验是否登录  本地如果有token就是登陆了, 没有token就是未登录
  let token = localStorage.getItem('token')
  // console.log(to)
  if(!token && to.path !== '/login') return next({ path: '/login' }) 

  if(token && to.path === '/login') return next({ path: '/home' })
  
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
