import store from 'src/infra/store'
import { abort } from 'src/infra/services/http'
import { PATH_LOGIN } from 'src/support'
import { confirm } from 'src/support/message'

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
 * @param {function} next
 * @returns {*}
 */
export const checkModified = (next) => {
  const modified = store.getters.AppModified
  if (modified) {
    return confirm('Alterações sem salvar', 'Deseja perder tudo?', () => {
      store.dispatch('changeModified', false).then(() => next())
    })
  }
  return modified
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

  abort('The route where request was started was leaved, all requests was canceled')

  if (!security) {
    return next()
  }

  if (checkModified(next)) {
    return
  }

  if (checkSession()) {
    return next()
  }
  return next(PATH_LOGIN)
}
