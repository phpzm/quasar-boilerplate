import { routes, afterEach, beforeEach, load } from 'src/routes/index'

/**
 * @param {Object} environment
 */
export default (environment) => {
  environment.set('routes', routes)
  environment.set('afterEach', afterEach)
  environment.set('beforeEach', beforeEach)
  environment.set('load', load)
}
