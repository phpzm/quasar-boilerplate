// Types
export const CHANGE_MENU = 'CHANGE_MENU'
export const CHANGE_WIDTH = 'CHANGE_WIDTH'
export const CHANGE_HEIGHT = 'CHANGE_HEIGHT'

const state = {
  options: []
}

const getters = {
  getDashboardOptions (state) {
    return state.options
  }
}

const actions = {
  setDashboardOptions ({commit}, payload) {
    commit(CHANGE_MENU, payload)
  }
}

const mutations = {
  [CHANGE_MENU] (state, menu) {
    state.options = menu
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
