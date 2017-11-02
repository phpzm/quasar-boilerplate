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
  let data = []
  if ($component.pagination) {
    const {body, meta} = response.data
    if (!Array.isArray(body)) {
      return []
    }
    data = body
    // noinspection JSUndefinedPropertyAssignment
    $component.page = parseInt(meta.page)
    // noinspection JSUndefinedPropertyAssignment
    $component.pages = parseInt(meta.last)
  }
  if (!data.length && Array.isArray(response)) {
    data = response
  }
  // noinspection JSUndefinedPropertyAssignment
  $component.data = data
}

/**
 * @param {Vue} $component
 * @param {AxiosResponse} response
 * @param {Function} callback
 */
export const populateForm = ($component, response, callback) => {
  let record = {}
  const {body} = response.data
  if (Array.isArray(body)) {
    record = body[0]
  }
  // noinspection JSUndefinedPropertyAssignment
  $component.record = record
  if (typeof callback === 'function') {
    callback()
  }
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
