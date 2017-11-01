import http from 'src/app/infra/services/http'
import { register, unRegister } from 'src/app/modules/auth/services'

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
  unRegister(success)
    .then(() => {
      http.post('/auth/logout', store.getters.getAuthUser, {requestId: ''})
    })
}
