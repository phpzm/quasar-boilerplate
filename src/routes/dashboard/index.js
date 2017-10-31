import user from 'src/domains/auth/user/routes'
import graphics from 'src/domains/graphics/routes'
import forms from 'src/domains/forms/routes'

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
      {
        path: '',
        component: 'app/modules/dashboard/components/Home',
        name: 'dashboard.home',
        meta: {
          label: 'Página Inicial',
          title: 'Página Inicial'
        }
      },
      ...forms,
      ...graphics,
      ...user
    ]
  }
]
