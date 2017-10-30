import http from 'src/app/infra/services/http'
import { register } from 'src/app/modules/auth/services/index'

/**
 * @param {Object} credentials
 * @param {boolean} remember
 * @param {Function} success
 */
export const login = (credentials, remember, success) => {
  http
    .post('/auth/login', credentials)
    .then(({data}) => {
      register(data.body.user, data.body.token, remember, success)
    })
}

/**
 * @param {Object} credentials
 */
export const logout = (credentials) => {
  return http.post('/auth/logout', credentials)
}
