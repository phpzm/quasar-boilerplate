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
   * @param tooltip
   */
  [types.setAppTooltip] (state, tooltip) {
    state.app.tooltip = tooltip
  },
  /**
   * @param state
   * @param width
   */
  [types.setAppWidth] (state, width) {
    state.app.width = width
  },
  /**
   * @param state
   * @param height
   */
  [types.setAppHeight] (state, height) {
    state.app.height = height
  },
  /**
   * @param state
   * @param modified
   */
  [types.setAppModified] (state, modified) {
    state.app.modified = modified
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
   * @param modified
   */
  [types.setAppMessages] (state, modified) {
    state.app.messages = modified
  }
}
