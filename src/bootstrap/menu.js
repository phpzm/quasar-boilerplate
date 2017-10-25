export default [
  {
    to: '/dashboard',
    label: 'Página Inicial',
    exact: true,
    left: {
      icon: 'home'
    }
  },
  {
    to: '/dashboard/forms',
    label: 'Formulários',
    exact: true,
    left: {
      icon: 'subtitles'
    }
  },
  {
    to: '/dashboard/graphics',
    label: 'Gráficos',
    exact: true,
    left: {
      icon: 'pie_chart'
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
