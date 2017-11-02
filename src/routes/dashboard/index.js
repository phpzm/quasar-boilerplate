import user from 'src/domains/admin/user/routes'
import categories from 'src/domains/general/category/routes'
import graphics from 'src/domains/demo/graphics/routes'
import forms from 'src/domains/demo/forms/routes'

const root = [
  {
    path: '',
    component: 'domains/@/dashboard/components/Home',
    name: 'dashboard.home',
    meta: {
      label: 'Página Inicial',
      title: 'Página Inicial'
    }
  }
]

/**
 * @type Array
 */
export default [
  {
    path: '/dashboard',
    component: 'app/modules/dashboard/Index',
    props: {
      view: 'lHh Lpr lFf',
      reveal: true,
      leftBreakpoint: 996
    },
    children: [
      ...root,
      ...user,
      ...categories,
      ...forms,
      ...graphics
    ]
  }
]
