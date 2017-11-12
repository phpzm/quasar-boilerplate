import tooltip from 'src/bootstrap/configure/tooltip'
import { locales } from 'src/bootstrap/i18n'

/**
 * @param {Object} environment
 */
export default (environment) => {
  environment.set('tooltip', tooltip)
  environment.set('locales', locales)
}
