import Vue from 'vue'
import Router from 'vue-router'
import Navmenu from "../components/navmenu/NavMenu";
import App from "../App";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/navmenu',
      name: 'NavMenu',
      component: Navmenu
    }
  ]
})
