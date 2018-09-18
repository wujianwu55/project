import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import Kuura from '../components/Kuura'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path:'/Kuura',
      component:Kuura
    }
  ]
})
