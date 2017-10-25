import user from 'src/domains/auth/user/router'
import graphics from 'src/domains/graphics/router'

export default [
  {
    path: '/dashboard',
    component: 'app/dashboard/Index',
    children: [
      {
        path: '',
        component: 'app/dashboard/components/Home',
        name: 'dashboard.home'
      },
      ...graphics,
      ...user
    ]
  }
]
