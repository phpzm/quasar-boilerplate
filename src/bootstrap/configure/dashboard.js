import store from 'genesis/infra/store/index'
import menu from 'src/bootstrap/menus/drawer'
import options from 'src/bootstrap/menus/options'
import configurePath from 'src/bootstrap/configure/path'

/**
 * @param {Vue} $component
 */
export default ($component) => {
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setAppMenu', menu(configurePath))

  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setDashboardOptions', options())
}
