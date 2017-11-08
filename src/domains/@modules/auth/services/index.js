import http from 'src/app/infra/services/http'
import store from 'src/app/infra/store/index'
import { registerToken, registerUser, unRegister } from 'src/app/modules/auth/services/index'

/**
 * @param {Object} credentials
 * @param {boolean} remember
 * @param {Function} success
 */
export const login = (credentials, remember, success) => {
  return http
    .post('/auth/login', credentials)
    .then((response) => {
      const body = http.$body(response)
      registerToken(body.token, remember).then(() => registerUser(body.user).then(success))
    })
}

/**
 * @param {Function} success
 */
export const logout = (success) => {
  return unRegister(success)
    .then(() => {
      http.post('/auth/logout', store.getters.getAuthUser, {requestId: '', noLoading: true})
    })
}
