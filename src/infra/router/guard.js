import store from 'src/infra/store'
import { PATH_LOGIN } from 'src/support'

/**
 * @param {Array} routes
 * @returns {Array}
 */
export const protect = (routes) => {
  const security = {security: true}

  if (Array.isArray(routes)) {
    return routes.map(route => {
      route.meta = route.meta ? Object.assign({}, route.meta, security) : security
      if (route.children) {
        route.children = protect(route.children)
      }
      return route
    })
  }
  return routes
}

/**
 * @return {boolean}
 */
export const checkSession = () => {
  // noinspection JSUnresolvedVariable
  return store.getters.AppToken
}

/**
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 * @returns {*}
 */
export const beforeEach = (to, from, next) => {
  // noinspection JSUnresolvedVariable
  const security = to.meta.security

  if (!security) {
    return next()
  }
  if (checkSession()) {
    return next()
  }
  return next(PATH_LOGIN)
}
