import store from 'src/app/infra/store'
import { configureUser } from 'src/bootstrap/settings'

/**
 * @param {Object} user
 * @param {string} token
 * @param {boolean} remember
 * @param {Function} success
 */
export const register = (user, token, remember, success) => {
  store.dispatch('changeUser', configureUser(user), remember)
    .then(() => {
      store.dispatch('changeToken', token, remember).then(success)
    })
}

/**
 * @param {Object} user
 * @param {string} token
 */
export const unRegister = (user, token) => {
  store.dispatch('changeUser', undefined)
    .then(() => {
      store.dispatch('changeToken', undefined)
    })
}
