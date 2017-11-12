// settings of vendors
import 'src/vendor/quasar'
import 'src/vendor/froala'
import 'src/vendor/fullcalendar'
import { install } from 'src/vendor/phpzm'

// events to boot
import { beforeUnload, errorHandler } from 'src/bootstrap/events'

const dev = process.env.DEV

/**
 * @param Vue
 * @returns {Object}
 */
const bootstrap = (Vue) => {
  Vue.config.productionTip = !dev
  Vue.config.silent = !dev
  Vue.config.devtools = dev
  Vue.config.productionTip = dev
  Vue.config.errorHandler = errorHandler

  return install(Vue, beforeUnload)
}

export default bootstrap
