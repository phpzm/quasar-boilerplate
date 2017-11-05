/**
 * Vuex state
 */
import { APP_NAME } from 'src/app/support/index'

const label = APP_NAME

export default {
  app: {
    name: label,
    title: label,
    tooltip: '',
    width: 0,
    height: 0,
    modified: false,
    menu: [],
    messages: []
  }
}
