import menu from 'src/bootstrap/menu'
import store from 'src/app/infra/store'

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

/**
 * @param $component
 * @param response
 * @returns {Array}
 */
export const populateGrid = ($component, response) => {
  let records = []
  if ($component.pagination) {
    if (!response.data) {
      return []
    }
    records = response['data']
    $component.page = response['current_page']
    $component.pages = response['last_page']
  }
  if (!records.length && Array.isArray(response)) {
    records = response
  }
  return records
}
