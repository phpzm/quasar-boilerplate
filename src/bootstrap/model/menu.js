import { menu as user } from 'src/domains/admin/user/model'

export default to => [
  {
    to: '/dashboard',
    label: 'Página Inicial',
    exact: true,
    left: {
      icon: 'home'
    }
  },
  {
    to: to('/dashboard/forms'),
    label: 'Formulários',
    exact: true,
    left: {
      icon: 'subtitles'
    }
  },
  {
    to: to('/dashboard/graphics'),
    label: 'Gráficos',
    exact: true,
    left: {
      icon: 'pie_chart'
    }
  },
  {
    label: 'Administração',
    icon: 'format_quote',
    children: [
      {
        label: 'Autenticação',
        icon: 'vpn_key',
        children: [
          user(to)
        ]
      }
    ]
  }
]
