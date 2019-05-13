import Vue from 'vue'
import Router from 'vue-router'
import RyLogin from '@/pages/ry-login'
import RyPostAdmin from '@/pages/ry-postAdmin'
import RyPostAdminContentSearch from '@/components/ry-postAdmin/ry-postAdmin-content-search'
import RyDeAdminContentSearch from "@/components/ry-postAdmin/ry-deAdmin-content-search"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: RyLogin,
    },
    {
      path: '/RyPostAdmin',
      name: 'RyPostAdmin',
      component: RyPostAdmin,
      children:[
        {
          path: '/RyPostAdminContentSearch',
          component: RyPostAdminContentSearch
        },
        {
          path: '/RyDeAdminContentSearch',
          component: RyDeAdminContentSearch
        }
      ]
    }
    
  ]
})
