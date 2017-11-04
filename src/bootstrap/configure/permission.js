import { get } from 'lodash'

/**
 * @param {Object} $user
 * @param {Route} $route
 * @param {Object} action
 * @returns {boolean}
 */
export default ($user, $route, action = null) => {
  const namespace = get($route, 'meta.namespace', false)
  if (!namespace) {
    return true
  }

  const permissions = get($user, 'permissions', false)
  if (!permissions) {
    return true
  }

  const expected = parseInt(get(permissions[namespace], 'permission'))

  let required = parseInt(get($route, 'meta.permission'))
  if (action) {
    required = parseInt(action.permission)
  }

  return required <= expected
}
