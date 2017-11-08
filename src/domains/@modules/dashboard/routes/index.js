import { meta as home } from '../model/home'
import { meta as noAccess, path } from '../model/no-access'

export default [
  {
    path: '',
    component: 'domains/@modules/dashboard/components/Home',
    name: 'dashboard.home',
    meta: home
  },
  {
    path: path,
    component: 'domains/@modules/dashboard/components/NoAccess',
    name: 'dashboard.no-access',
    meta: noAccess // Object.assign({}, meta, {security: false})
  }
]
