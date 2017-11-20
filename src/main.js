// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./app/themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar-framework'
import bootstrap from 'bootstrap'

Vue.use(Quasar)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'

const base = {
  el: '#q-app',
  render: h => h(require('./root.vue').default)
}
const options = Object.assign({}, base, bootstrap(Vue))

const dev = process.env.DEV

console.warn('~> process.env.DEV', dev)

Vue.config.productionTip = !dev
Vue.config.silent = !dev
Vue.config.devtools = dev
Vue.config.productionTip = dev

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue(options)
})
