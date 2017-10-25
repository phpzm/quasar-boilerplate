import user from 'src/domains/auth/user/router'

export default [
  {
    path: '/dashboard',
    component: 'app/dashboard/index',
    children: [
      {
        path: '',
        component: 'app/dashboard/components/Home',
        name: 'dashboard.home'
      },
      ...user
    ]
  }
]
