import http from 'src/infra/services/http/index'
import store from 'src/infra/store'

/**
 * @param {string} user
 * @param {string} password
 * @param {function} success
 * @param {function} fail
 */
export const login = (user, password, success, fail) => {
  const credentials = {}
  credentials['email'] = user
  credentials['password'] = password
  http
    .post('/auth/login', credentials)
    .then(({data}) => {
      store
        .dispatch('login', {
          user: user,
          token: data.token
        })
        .then(() => {
          success(data)
        })
    })
    .catch(fail)
}
