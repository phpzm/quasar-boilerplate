import { menu as user } from 'src/domains/admin/user/model'
import { menu as category } from 'src/domains/general/category/model'

export default to => [
  {
    id: 'dashboard',
    to: '/dashboard',
    label: 'Página Inicial',
    exact: true,
    left: {
      icon: 'home'
    }
  },
  {
    id: 'forms',
    to: to('/dashboard/forms'),
    label: 'Formulários',
    exact: true,
    left: {
      icon: 'subtitles'
    }
  },
  {
    id: 'graphics',
    to: to('/dashboard/graphics'),
    label: 'Gráficos',
    exact: true,
    left: {
      icon: 'pie_chart'
    }
  },
  {
    id: 'admin',
    label: 'Administração',
    icon: 'format_quote',
    children: [
      {
        id: 'vpn_key',
        label: 'Autenticação',
        icon: 'vpn_key',
        children: [
          user(to)
        ]
      }
    ]
  },
  {
    id: 'work',
    label: 'Cadastro',
    icon: 'work',
    children: [
      {
        id: 'list',
        label: 'Geral',
        icon: 'list',
        children: [
          category(to)
        ]
      }
    ]
  }
]
