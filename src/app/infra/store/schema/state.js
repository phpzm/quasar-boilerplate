/**
 * Vuex state
 */
import { APP_NAME } from 'src/app/support/index'

const label = APP_NAME

export default {
  app: {
    name: label,
    title: label,
    menu: [],
    user: undefined,
    token: process.env.DEV ? 'dev' : undefined,
    modified: false
  }
}
