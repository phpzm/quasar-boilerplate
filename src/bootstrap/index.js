// main dependencies
import Vuelidate from 'vuelidate'
import VueFroala from 'vue-froala-wysiwyg'
import moment from 'moment'

// settings of vendors
import 'src/vendor/quasar'
import 'src/vendor/froala'
import 'src/vendor/fullcalendar'
import 'src/vendor/phpzm'

// modules to install
import Http from 'phpzm/infra/services/http/plugin'
import router from 'phpzm/infra/router'
import store from 'phpzm/infra/store'
import i18n from 'phpzm/support/i18n'

// events to boot
import { beforeUnload, errorHandler } from 'src/bootstrap/events'

const dev = process.env.DEV

const boot = (Vue) => {
  Vue.use(Vuelidate)
  Vue.use(VueFroala)
  Vue.use(Http, { store, router })

  moment.locale('pt-BR')

  window.addEventListener('beforeunload', beforeUnload(store, i18n))

  Vue.config.productionTip = !dev
  Vue.config.silent = !dev
  Vue.config.devtools = dev
  Vue.config.productionTip = dev
  Vue.config.errorHandler = errorHandler

  return {
    router,
    store,
    i18n
  }
}

export default boot
