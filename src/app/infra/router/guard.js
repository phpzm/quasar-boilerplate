import store from 'src/app/infra/store'
import { abort } from 'src/app/infra/services/http'
import { PATH_LOGIN } from 'src/app/support'
import { confirm } from 'src/app/support/message'
import i18n from 'src/app/support/i18n'
import { Events } from 'quasar-framework'

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
  return store.getters.getAuthToken
}

/**
 * @param {function} next
 * @returns {*}
 */
export const checkModified = (next) => {
  const modified = store.getters.AppModified
  if (modified) {
    window.setTimeout(() => {
      // noinspection JSCheckFunctionSignatures
      confirm(i18n.t('events.modified.title'), i18n.t('events.modified.message'), () => {
        // noinspection JSIgnoredPromiseFromCall
        store.dispatch('setAppModified', false)
        next()
      })
    }, 100)
    return true
  }
  return false
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
    return toNext(to, next)
  }

  if (checkModified(next)) {
    return next(false)
  }

  if (checkSession()) {
    return toNext(to, next)
  }

  return toNext(to, next, PATH_LOGIN)
}

/**
 * @param {Route} to
 * @param {Function} next
 * @param {string} path
 * @returns {*}
 */
const toNext = (to, next, path = '') => {
  Events.$emit('app.route.before', to, path)
  if (path) {
    return next(path)
  }
  next()
}

/**
 * @param {Route} to
 * @param {Route} from
 * @returns {*}
 */
export const afterEach = (to, from) => {
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setAppMessages', [])

  if (to.meta.title) {
    return setTitle(to.meta.title)
  }
  if (to.meta.tooltip) {
    return setTitle(to.meta.tooltip)
  }
  if (to.meta.label) {
    return setTitle(to.meta.label)
  }
}

/**
 * @param {string} title
 */
const setTitle = (title) => {
  if (title) {
    // noinspection JSIgnoredPromiseFromCall
    store.dispatch('setAppTitle', String(title))
  }
}
