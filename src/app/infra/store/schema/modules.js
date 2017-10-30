/**
 * Vuex modules
 */
import { store as auth } from 'src/app/modules/auth/index'
import { store as dashboard } from 'src/app/modules/dashboard/index'
import bootstrap from 'src/bootstrap/store'

export default {
  auth,
  dashboard,
  bootstrap
}
