const base = 'domains/@modules/auth/components'

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
    component: base + '/Index',
    children: [
      {
        path: '',
        redirect: '/auth/login'
      },
      {
        path: 'login',
        component: base + '/Login',
        name: 'auth.login'
      }
    ]
  }
]
