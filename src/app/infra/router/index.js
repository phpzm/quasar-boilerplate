import Vue from 'vue'
import Router from 'vue-router'

import routes from 'src/routes'

import { beforeEach } from 'src/app/infra/router/guard'

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

const router = new Router({
  routes: configure(routes)
})

router.beforeEach(beforeEach)

export default router
