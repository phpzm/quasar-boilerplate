import { protect } from 'phpzm/infra/router/guard'
export { beforeEach, afterEach } from 'phpzm/infra/router/guard'

/**
 * @type Array
 */
import auth from 'src/routes/auth'

/**
 * @type Array
 */
import dashboard from 'src/routes/dashboard'

/**
 * @type Array
 */
import error from 'src/routes/errors'

/**
 * @type Array
 */
export const routes = [
  ...auth,
  ...protect(dashboard),
  ...error
]
