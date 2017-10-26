// main dependencies
import Vuelidate from 'vuelidate'
import VueFroala from 'vue-froala-wysiwyg'
import moment from 'moment'

// modules to install
import Http from 'src/infra/services/http/plugin'
import router from 'src/infra/router'
import store from 'src/infra/store'
import i18n from 'src/support/i18n'

// settings of vendors
import 'src/bootstrap/vendor/quasar'
import 'src/bootstrap/vendor/froala'

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
