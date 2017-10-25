import user from 'src/domains/auth/user/router/index'
import graphics from 'src/domains/graphics/router/index'
import forms from 'src/domains/forms/router/index'

export default [
  {
    path: '/dashboard',
    component: 'app/dashboard/Index',
    props: {
      view: 'hHh Lpr lFf',
      reveal: false,
      leftBreakpoint: 996
    },
    children: [
      {
        path: '',
        component: 'app/dashboard/components/Home',
        name: 'dashboard.home'
      },
      ...forms,
      ...graphics,
      ...user
    ]
  }
]
