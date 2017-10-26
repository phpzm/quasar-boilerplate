import Vue from 'vue'
import Router from 'vue-router'

import { router as auth } from 'src/app/modules/auth/index'
import { router as dashboard } from 'src/app/modules/dashboard/index'
import { router as errors } from 'src/app/modules/errors/index'

import { protect, beforeEach } from 'src/app/infra/router/guard'

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

const routes = configure([
  ...auth,
  ...protect(dashboard),
  ...errors
])

const router = new Router({
  routes: routes
})

router.beforeEach(beforeEach)

export default router
