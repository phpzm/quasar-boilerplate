import { group, menu, item } from 'src/app/modules/dashboard'

import { menu as home } from 'src/domains/@modules/dashboard/model/home'
import { menu as forms } from 'src/domains/demo/forms/model'
import { menu as graphics } from 'src/domains/demo/graphics/model'
import { menu as user } from 'src/domains/admin/user/model'
import { menu as permission } from 'src/domains/admin/permission/model'
import { menu as organization } from 'src/domains/admin/organization/model'
import { menu as category } from 'src/domains/general/category/model'

export default (to) => [
  home(to),
  forms(to),
  graphics(to),
  menu('admin', 'API de Forms', 'format_quote', [
    organization(to),
    permission(to),
    user(to)
  ]),
  category(to),
  group('Exemplo de Menu', [
    menu('id-1', 'Menu 1', 'filter_1', [
      menu('id-1-1', 'Menu 1.1', 'filter_2', [
        item('id-1-1-1', 'path', 'Menu 1.1.1', 'filter_3', true, 'Não clique! É apenas um exemplo!'),
        item('id-1-1-2', 'path', 'Menu 1.1.2', 'filter_3', true, 'Não clique! É apenas um exemplo!'),
        item('id-1-1-3', 'path', 'Menu 1.1.3', 'filter_3', true, 'Não clique! É apenas um exemplo!'),
        menu('id-1-1-4', 'Menu 1.1.4', 'filter_3', [
          item('id-1-1-4-1', 'path', 'Menu 1.1.4.1', 'filter_4', true, 'Não clique! É apenas um exemplo!'),
          item('id-1-1-4-2', 'path', 'Menu 1.1.4.2', 'filter_4', true, 'Não clique! É apenas um exemplo!'),
          item('id-1-1-4-3', 'path', 'Menu 1.1.4.3', 'filter_4', true, 'Não clique! É apenas um exemplo!')
        ])
      ]),
      item('id-1-2', 'path', 'Menu 1.2', 'filter_2', true, 'Não clique! É apenas um exemplo!'),
      item('id-1-3', 'path', 'Item 1.3', 'filter_2', true, 'Não clique! É apenas um exemplo!')
    ]),
    menu('id-2', 'Menu 2', 'filter_1', [
      item('id-2-1', 'path', 'Menu 2.1', 'filter_2', true, 'Não clique! É apenas um exemplo!'),
      item('id-2-2', 'path', 'Menu 2.2', 'filter_2', true, 'Não clique! É apenas um exemplo!'),
      item('id-2-3', 'path', 'Menu 2.3', 'filter_2', true, 'Não clique! É apenas um exemplo!'),
      item('id-2-4', 'path', 'Menu 2.4', 'filter_2', true, 'Não clique! É apenas um exemplo!')
    ])
  ])
]
