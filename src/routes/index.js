import { protect } from 'src/app/infra/router/guard'

import auth from 'src/routes/auth'
import dashboard from 'src/routes/dashboard'
import error from 'src/routes/errors'

export default [
  ...auth,
  ...protect(dashboard),
  ...error
]
