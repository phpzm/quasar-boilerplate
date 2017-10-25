export default [
  {
    path: '/',
    redirect: '/auth/login'
  },
  {
    path: '/auth',
    component: 'app/auth/index',
    children: [
      {
        path: '',
        redirect: '/auth/login'
      },
      {
        path: 'login',
        component: 'app/auth/components/Login',
        name: 'auth.login'
      }
    ]
  }
]
