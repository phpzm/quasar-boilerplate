// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar-framework'
import Vuelidate from 'vuelidate'
import VueFroala from 'vue-froala-wysiwyg'
import moment from 'moment'

import Http from 'src/infra/services/http/plugin'
import router from 'src/infra/router'
import store from 'src/infra/store'
import i18n from 'src/app/common/i18n'
import 'src/support/quasar/index'

// Require Froala Editor js file
require('froala-editor/js/froala_editor.pkgd.min')
require('froala-editor/js/plugins/code_view.min')
require('froala-editor/js/languages/pt_br')

// Require Froala Editor css files
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css')

Vue.config.productionTip = false

Vue.use(Quasar)
Vue.use(Vuelidate)
Vue.use(VueFroala)
Vue.use(Http, { store, router })

moment.locale('pt-BR')

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    i18n,
    router,
    store,
    render: h => h(require('root.vue'))
  })
})
