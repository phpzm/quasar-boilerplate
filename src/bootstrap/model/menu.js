import { menu as user } from 'src/domains/admin/user/model'
import { menu as category } from 'src/domains/general/category/model'

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
  },
  {
    label: 'Cadastro',
    icon: 'work',
    children: [
      {
        label: 'Geral',
        icon: 'list',
        children: [
          category(to)
        ]
      }
    ]
  }
]
