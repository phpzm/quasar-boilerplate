import store from 'src/app/infra/store'
import menu from 'src/bootstrap/model/menu'
import options from 'src/bootstrap/model/options'

/**
 * @param {string} path
 * @param {Object} query
 * @returns {{path: *, query: {}}}
 */
export const to = (path, query = {}) => {
  return {
    path: path,
    query: query
  }
}

/**
 * @param {Vue} $component
 */
export default ($component) => {
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setAppMenu', menu(to))
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setDashboardOptions', options())
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setDashboardBadges', [
    {
      value: 'admin',
      label: 'New'
    }
  ])
}
