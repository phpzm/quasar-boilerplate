import { meta } from '../model/index'

export default [
  {
    path: '',
    component: 'domains/@/dashboard/components/Home',
    name: 'dashboard.home',
    meta: meta
  },
  {
    path: 'no-access',
    component: 'domains/@/dashboard/components/NoAccess',
    name: 'dashboard.no-access',
    meta: meta // Object.assign({}, meta, {security: false})
  }
]
