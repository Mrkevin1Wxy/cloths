import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Cloth from '@/components/cloth/cloth'
import About from "@/components/about/about";
Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/',
      name: 'home',
      component: Home,
    }, 
    {
      path: '/Cloth',
      name: "cloth",
      component: Cloth
    },
    {
      path:"/About",
      name:"about",
      component:About
    }
   
   
  ]
})
