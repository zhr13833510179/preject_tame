import Vue from 'vue'
import Router from 'vue-router'
import App1 from './views/App1.vue'
import Appzt from './views/Appzt.vue'
import AppStringbox from './views/AppStringbox.vue'
import RelevantWhole from './views/RelevantWhole.vue'
import AppMenu from "./views/AppMenu.vue"
import AppDetails from './views/about/AppDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'AppStringbox',
      component: AppStringbox,children:[
        {path:'/AppDetails',name:'AppDetails',component:AppDetails}
      ]
    },
    {
      path: '/Appzt',
      name: 'Appzt',
      component: Appzt
    },
    {
      path: '/App1',
      name: 'App1',
      component: App1
    },
    {
      path:'/RelevantWhole',
      name:'RelevantWhole',
      component:RelevantWhole
    },
    {
      path:'/AppMenu',
      name:'AppMenu',
      component:AppMenu
    }
  ]
})
