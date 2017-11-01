import store from 'src/app/infra/store'
import { configureUser } from 'src/bootstrap/settings'
import { promise } from 'src/app/support/utils'

/**
 * @param {Object} user
 * @param {string} token
 * @param {boolean} remember
 * @param {Function} success
 */
export const register = (user, token, remember, success) => {
  // noinspection JSUnresolvedFunction
  store.dispatch('changeUser', configureUser(user), remember)
    .then(() => {
      // noinspection JSUnresolvedFunction
      store.dispatch('changeToken', token, remember).then(success)
    })
}

/**
 * @param {Function} success
 */
export const unRegister = (success) => {
  return promise((resolve, reject) => {
    const solver = () => {
      success()
      resolve()
    }
    // noinspection JSUnresolvedFunction
    store.dispatch('setAuthUser', undefined)
      .then(() => {
        // noinspection JSUnresolvedFunction
        store.dispatch('setAuthToken', undefined)
          .then(solver)
          .catch(reject)
      })
      .catch(reject)
  })
}
