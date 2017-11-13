import { meta } from '../model/index'

export default [
  {
    path: '/dashboard/forms',
    component: 'domains/demo/forms/components/Index',
    meta: meta,
    name: 'dashboard.forms.index'
  },
  {
    path: '/dashboard/forms/dynamic',
    component: 'domains/demo/forms/components/Dynamic',
    meta: meta,
    name: 'dashboard.forms.dynamic'
  }
]
