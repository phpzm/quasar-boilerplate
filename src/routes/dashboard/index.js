import home from 'src/domains/@/dashboard/routes'
import forms from 'src/domains/demo/forms/routes'
import graphics from 'src/domains/demo/graphics/routes'
import calendar from 'src/domains/demo/calendar/routes'
import user from 'src/domains/admin/user/routes'
import organization from 'src/domains/admin/organization/routes'
import categories from 'src/domains/general/category/routes'

/**
 * @type Array
 */
export default [
  {
    path: '/dashboard',
    component: 'domains/@/dashboard/components/Index',
    props: {
      view: 'lHh Lpr lFf',
      reveal: true,
      leftBreakpoint: 996
    },
    children: [
      ...home,
      ...forms,
      ...graphics,
      ...calendar,
      ...user,
      ...organization,
      ...categories
    ]
  }
]
