/**
 * Vuex mutations
 */
import * as types from 'src/app/infra/store/types'

export default {
  /**
   * @param state
   * @param name
   */
  [types.setAppName] (state, name) {
    state.app.name = name
  },
  /**
   * @param state
   * @param title
   */
  [types.setAppTitle] (state, title) {
    state.app.title = title
  },
  /**
   * @param state
   * @param menu
   */
  [types.setAppMenu] (state, menu) {
    state.app.menu = menu
  },
  /**
   * @param state
   * @param user
   */
  [types.setAppUser] (state, user) {
    state.app.user = user
  },
  /**
   * @param state
   * @param token
   */
  [types.setAppToken] (state, token) {
    state.app.token = token
  },
  /**
   * @param state
   * @param modified
   */
  [types.setAppModified] (state, modified) {
    state.app.modified = modified
  }
}
