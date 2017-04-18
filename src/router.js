import Vue from 'vue'
import VueRouter from 'vue-router'

import {router as Auth} from 'src/modules/Auth'
import {router as Dashboard} from 'src/modules/Dashboard'

Vue.use(VueRouter)

const load = (component) => {
  // noinspection ES6ModulesDependencies, JSUnresolvedVariable
  return () => System.import(`modules/${component}.vue`)
}
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
  ...Auth,
  ...Dashboard,
  { path: '*', component: 'Error404' }
])

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  routes
})
