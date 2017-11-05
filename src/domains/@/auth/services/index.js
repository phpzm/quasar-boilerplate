import http from 'src/app/infra/services/http'
import store from 'src/app/infra/store'
import { register, unRegister } from 'src/app/modules/auth/services'

/**
 * @param {Object} credentials
 * @param {boolean} remember
 * @param {Function} success
 */
export const login = (credentials, remember, success) => {
  http
    .post('/auth/login', credentials)
    .then((response) => {
      register(http.$body(response).user, http.$body(response).token, remember, success)
    })
}

/**
 * @param {Function} success
 */
export const logout = (success) => {
  unRegister(success)
    .then(() => {
      http.post('/auth/logout', store.getters.getAuthUser, {noLoading: true, requestId: ''})
    })
}
