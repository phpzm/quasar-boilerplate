import { get } from 'lodash'

/**
 * @param {Object} $user
 * @param {Route} $route
 * @param {Object} action
 * @returns {boolean}
 */
export default ($user, $route, action = null) => {
  // get namespace from meta, if don't have namespace in meta property confirm
  const namespace = get($route, 'meta.namespace', false)
  if (!namespace) {
    return true
  }
  // get permissions of current user, again confirm when is not defined
  const permissions = get($user, 'permissions', false)
  if (!permissions) {
    return true
  }
  // extract of permissions the access level
  const expected = parseInt(get(permissions[namespace], 'permission'))
  // intercept in meta the required access level
  let required = parseInt(get($route, 'meta.permission'))
  if (action) {
    // when the is to action, get from action the access level required
    required = parseInt(action.permission)
  }
  // return granted or not access
  return required <= expected
}
