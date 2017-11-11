import http from 'genesis/infra/services/http'
import store from 'genesis/infra/store/index'
import { registerToken, registerUser, unRegister } from 'genesis/modules/auth/services/index'
import { configureAuth } from 'src/bootstrap/configure/auth'

/**
 * @param {Object} credentials
 * @param {boolean} remember
 * @param {Function} success
 */
export const login = (credentials, remember, success) => {
  return http
    .post('/auth/login', configureAuth(credentials))
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
