/**
 * Vuex state
 */
import { APP_NAME } from 'src/support/index'

const label = APP_NAME

export default {
  app: {
    name: label,
    title: label,
    menu: [],
    user: undefined,
    token: process.env.DEV ? 'dev' : undefined
  }
}
