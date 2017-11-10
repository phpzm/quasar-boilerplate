import { meta as home } from '../model/home'
import { meta as noAccess, path } from '../model/no-access'

export default [
  {
    path: '',
    component: 'app/modules/dashboard/components/DashboardHome',
    name: 'dashboard.home',
    meta: home
  },
  {
    path: path,
    component: 'app/modules/dashboard/components/DashboardNoAccess',
    name: 'dashboard.no-access',
    meta: noAccess // Object.assign({}, meta, {security: false})
  }
]
