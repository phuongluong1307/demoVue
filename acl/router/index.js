import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../../package/Admin/Dashboard.vue'
import Warehouse from '../../package/Admin/Warehouse/src/components/Warehouse.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/warehouse',
      name: 'Warehouse',
      component: Warehouse
    }
  ]
})
