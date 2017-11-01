import Vue from 'vue'
import Router from 'vue-router'

import { routes, beforeEach, afterEach } from 'src/routes'

Vue.use(Router)

function load (component) {
  if (!component) {
    return
  }
  return () => System.import(`src/${component}.vue`)
}

/**
 * @param {Array} routes
 */
const configure = (routes) => {
  return routes.map(route => {
    route.component = load(route.component)
    if (route.children) {
      route.children = configure(route.children)
    }
    return route
  })
}

const AppRouter = new Router({
  routes: configure(routes)
})

AppRouter.beforeEach(beforeEach)
AppRouter.afterEach(afterEach)

export default AppRouter
