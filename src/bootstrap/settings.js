import menu from 'src/bootstrap/model/menu'
import options from 'src/bootstrap/model/options'
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
  store.dispatch('setAppMenu', menu(to))
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setDashboardOptions', options())
}

/**
 * @param {Vue} $component
 * @param {Object} response
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

/**
 * @param {Object} user
 * @returns {*}
 */
export const configureUser = (user) => {
  return user
}
