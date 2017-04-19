import * as types from 'src/store/types'

export default {
  /**
   * @param state
   * @param menuLeft
   */
  [types.setAppMenuLeft] (state, menuLeft) {
    state.app.menuLeft = menuLeft
  }
}
