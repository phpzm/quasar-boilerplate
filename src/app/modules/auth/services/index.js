import store from 'src/app/infra/store'
import configureUser from 'src/bootstrap/configure/user'
import { promise } from 'src/app/support/utils'

/**
 * @param {string} token
 * @param {boolean} remember
 * @param {Function} success
 * @returns {Promise}
 */
export const registerToken = (token, remember, success = () => ({})) => {
  return store.dispatch('setAuthRemember', remember).then(store.dispatch('setAuthToken', token).then(success))
}

/**
 * @param {Object} user
 * @param {Function} success
 * @returns {Promise}
 */
export const registerUser = (user, success = () => ({})) => {
  return store.dispatch('setAuthUser', configureUser(user)).then(success)
}

/**
 * @param {Function} success
 * @returns {Promise}
 */
export const unRegister = (success) => {
  return promise((resolve, reject) => {
    const solver = () => {
      success()
      resolve()
    }
    store
      .dispatch('setAuthUser', undefined)
      .then(store.dispatch('setAuthToken', undefined).then(solver).catch(reject))
      .catch(reject)
  })
}
