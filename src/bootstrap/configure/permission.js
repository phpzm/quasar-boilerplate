import { get } from 'lodash'
import store from 'genesis/infra/store/index'

/**
 * @param {Object} $user
 * @param {Route} $route
 * @param {Object} action
 * @returns {boolean}
 */
export default ($user = null, $route, action = null) => {
  // get namespace from meta, if don't have namespace in meta property confirm
  const namespace = get($route, 'meta.namespace', false)
  if (!namespace) {
    return true
  }
  // get permissions of current user, again confirm when is not defined
  const permissions = store.getters.getAuthPermission

  if (!permissions) {
    return true
  }
  // extract of permissions the access level
  const expected = permissions[namespace]
  // intercept in meta the required access level
  let required = parseInt(get($route, 'meta.permission'))

  if (action) {
    // when the is to action, get from action the access level required
    required = parseInt(action.permission)
  }

  let verified
  // return granted or not access
  if (expected) {
    expected.filter((p) => {
      if (required === p.permission) {
        verified = true
      }
    })
    if (verified) {
      return true
    }
  }
  return false // true for bypass ACL routes
}
