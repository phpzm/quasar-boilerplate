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
export const configureDashboard = ($component) => {
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setAppMenu', menu(to))
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setDashboardOptions', options())
}

/**
 * @param {Vue} $component
 * @param {AxiosResponse} response
 * @returns {Array}
 */
export const populateGrid = ($component, response) => {
  let records = []
  if ($component.pagination) {
    if (!response.data) {
      return []
    }
    records = response['data']
    // noinspection JSUndefinedPropertyAssignment
    $component.page = response['current_page']
    // noinspection JSUndefinedPropertyAssignment
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

/**
 * @param {AxiosRequestConfig} config
 * @returns {AxiosRequestConfig}
 */
export const httpRequest = (config) => {
  return config
}

/**
 * @param {AxiosResponse} response
 * @returns {AxiosResponse}
 */
export const httpResponse = (response) => {
  return response
}

/**
 * @param {AxiosError} error
 * @param {AppRouter} router
 * @param {AppStore} store
 * @returns {AxiosError}
 */
export const httpError = (error, router, store) => {
  return error
}
