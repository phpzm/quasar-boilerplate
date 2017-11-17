import { get } from 'lodash'
import store from 'genesis/infra/store/index'

import menu from 'src/bootstrap/menus/drawer'
import options from 'src/bootstrap/menus/options'
import configurePath from 'src/bootstrap/configure/path'

/**
 * @param {Vue} $component
 */
export default ($component) => {
  const drawer = menu(configurePath)
  if (!Array.isArray(drawer)) {
    return false
  }

  store.dispatch('setAppMenu', drawer) // drawer.reduce(permission, [])

  store.dispatch('setDashboardOptions', options())
}

/**
 * @param {Array} accumulate
 * @param {Object} menu
 * @returns {Array}
 */
export const permission = (accumulate, menu) => {
  const user = store.getters.getAuthUser

  if (menu.children) {
    menu.children = menu.children.reduce(permission, [])
  }

  if (!menu.namespace) {
    accumulate.push(menu)
  }
  else if (get(user.permissions, menu.namespace, false)) {
    accumulate.push(menu)
  }
  return accumulate
}
