export { default as router } from 'src/app/dashboard/router'
export { default as store } from 'src/app/dashboard/store'
export const menu = [
  {
    to: '/dashboard',
    label: 'Início',
    exact: true,
    left: {
      icon: 'home'
    }
  },
  {
    to: '/dashboard/user',
    label: 'Usuários',
    left: {
      icon: 'supervisor_account'
    }
  }
]
