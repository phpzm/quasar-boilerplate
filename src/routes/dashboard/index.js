import { route } from 'src/app/infra/router/resources'

import home from 'src/domains/@modules/dashboard/routes'
import forms from 'src/domains/demo/forms/routes'
import graphics from 'src/domains/demo/graphics/routes'
import calendar from 'src/domains/demo/calendar/routes'
import { routes as admin } from 'src/domains/admin'
import categories from 'src/domains/general/category/routes'

/*
 * Configure the property meta with namespace and permission to access control
 * The helper "crud" provided for src/app/infra/router/resources.js has that ability
 * Example:
 * meta: {
 *   namespace: 'admin.user',
 *   permission: [1 to 4]
 * }
 */

/**
 * @type Array
 */
export default [
  route('/dashboard', '', 'domains/@modules/dashboard/components/DashboardIndex', {}, {}, [
    ...home,
    ...forms,
    ...graphics,
    ...calendar,
    ...admin,
    ...categories
  ])
]
