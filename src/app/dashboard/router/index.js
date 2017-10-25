import user from 'src/domains/auth/user/router'
import graphics from 'src/domains/graphics/router'
import forms from 'src/domains/forms/router'

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
      ...forms,
      ...graphics,
      ...user
    ]
  }
]
