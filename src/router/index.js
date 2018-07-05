import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/apps/console/themes/moudles/Home/index.vue'
import PC_Index from '@/apps/console/themes/moudles/Home/pc_index.vue'
import Tool from '@/apps/console/themes/moudles/Tool/Index.vue'

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
      path: '/tool',
      name: 'tool',
      component: Tool
    }

  ]
})
