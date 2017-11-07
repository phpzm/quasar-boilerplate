import Vue from 'vue'
import Router from 'vue-router'

import { routes as base, beforeEach, afterEach } from 'src/routes'

Vue.use(Router)

function load (component) {
  if (!component) {
    return
  }
  return () => System.import(`src/${component}.vue`)
}

const AppRouter = new Router({routes: []})

/**
 * @type {Array}
 */
export const routes = base

/**
 * @param news
 */
export const add = (news) => {
  routes.push(...news)
  AppRouter.addRoutes(configure(news))
}

/**
 * @param {Array} routes
 */
export const configure = (routes) => {
  return routes.map(route => {
    route.component = load(route.component)
    if (route.children) {
      route.children = configure(route.children)
    }
    return route
  })
}

AppRouter.addRoutes(configure(routes))
AppRouter.beforeEach(beforeEach)
AppRouter.afterEach(afterEach)

export default AppRouter
