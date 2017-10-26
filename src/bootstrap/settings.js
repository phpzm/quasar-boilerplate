import menu from 'src/bootstrap/menu'
import store from 'src/infra/store'

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
export const configureDashboard = $component => {
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('changeTitle', 'Painel de Controle')
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('changeMenu', menu(to))
}
