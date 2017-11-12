import './environment'
import 'genesis/components'

// main dependencies
import Vuelidate from 'vuelidate'
import VueFroala from 'vue-froala-wysiwyg'
import moment from 'moment'

// modules to install
import http from 'genesis/infra/services/http/plugin'
import router from 'genesis/infra/router'
import store from 'genesis/infra/store'
import _i18n from 'genesis/support/i18n'

import bootstrap from 'src/bootstrap/store'
import messages from 'src/bootstrap/i18n'

// noinspection JSUnresolvedVariable, ES6ModulesDependencies
const i18n = _i18n(process.env.LOCALE, messages)

store.registerModule('bootstrap', bootstrap)

/**
 * @param {Object} Vue
 * @param {Function} beforeUnload
 * @returns {Object}
 */
export const install = (Vue, beforeUnload) => {
  Vue.use(Vuelidate)
  Vue.use(VueFroala)
  Vue.use(http, {store, router})

  moment.locale('pt-BR')

  window.addEventListener('beforeunload', beforeUnload(store))

  return {router, store, i18n}
}
