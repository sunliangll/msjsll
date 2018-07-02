import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/apps/console/themes/moudles/Home/Index.vue'
import Tool from '@/apps/console/themes/moudles/Tool/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/tool',
      name: 'tool',
      component: Tool
    }

  ]
})
