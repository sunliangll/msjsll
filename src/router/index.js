import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/apps/console/themes/moudles/Home/index.vue'
import PC_Index from '@/apps/console/themes/moudles/Home/pc_index.vue'
import Tool from '@/apps/console/themes/moudles/Tool/Index.vue'
import Blogger from '@/apps/console/themes/moudles/Blogger/index.vue'
import Admin from '@/apps/admin/themes/moudles/Index/index'
import Login from '@/apps/admin/themes/moudles/account/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/pc_index',
      name: 'pc_index',
      component: PC_Index
    },{
      path: '/Admin',
      name: 'admin',
      component: Admin
    },{
      path: '/Login',
      name: 'login',
      component: Login
    },{
      path: '/blogger',
      name: 'blogger',
      component: Blogger
    },{
      path: '/tool',
      name: 'tool',
      component: Tool
    }

  ]
})
