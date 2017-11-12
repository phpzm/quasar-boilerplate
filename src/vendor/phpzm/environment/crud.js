import configure from 'src/bootstrap/configure/crud'
import buttons from 'src/bootstrap/configure/buttons'

/**
 * @param {Object} environment
 */
export default (environment) => {
  environment.set('buttons', buttons)
  environment.set('configure', configure)
}
