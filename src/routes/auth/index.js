/**
 * @type Array
 */
export default [
  {
    path: '/',
    redirect: '/auth/login'
  },
  {
    path: '/auth',
    component: 'app/modules/auth/Index',
    children: [
      {
        path: '',
        redirect: '/auth/login'
      },
      {
        path: 'login',
        component: 'domains/auth/credential/components/Login',
        name: 'auth.login'
      }
    ]
  }
]
