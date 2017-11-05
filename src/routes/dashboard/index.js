import { route } from 'src/app/infra/router/resources'

import home from 'src/domains/@/dashboard/routes'
import forms from 'src/domains/demo/forms/routes'
import graphics from 'src/domains/demo/graphics/routes'
import calendar from 'src/domains/demo/calendar/routes'
import user from 'src/domains/admin/user/routes'
import organization from 'src/domains/admin/organization/routes'
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
  route('/dashboard', '', 'domains/@/dashboard/components/Index', {}, {}, [
    ...home,
    ...forms,
    ...graphics,
    ...calendar,
    ...user,
    ...organization,
    ...categories
  ])
]
