import { protect } from 'src/app/infra/router/guard'
export { beforeEach, afterEach } from 'src/app/infra/router/guard'

import auth from 'src/routes/auth'
import dashboard from 'src/routes/dashboard'
import error from 'src/routes/errors'

export const routes = [
  ...auth,
  ...protect(dashboard),
  ...error
]
