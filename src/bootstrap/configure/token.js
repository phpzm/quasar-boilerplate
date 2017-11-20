import { set } from 'lodash'

/**
 * @param {Axios} http
 * @param {string} token
 * @returns {string}
 */
export default (http, token) => {
  set(http, 'defaults.headers.common.Authorization', token) // `Bearer ${token}`
}
