import { meta } from 'src/app/support/model'
import { route } from 'src/app/infra/router/resources'

import user from 'src/domains/admin/user/routes'
import permission from 'src/domains/admin/permission/routes'
import organization from 'src/domains/admin/organization/routes'

export const adminPath = '/dashboard/admin'
export const adminName = 'admin.index'
export const adminComponent = 'domains/@modules/dashboard/components/DashboardRouterView'
export const adminMeta = Object.assign(
  {}, {noLink: true}, meta('format_quote', 'API de Forms', 'Formulários Avançados')
)

export const routes = [
  route(adminPath, adminName, adminComponent, {}, adminMeta, [
    ...user,
    ...permission,
    ...organization
  ])
]
