export const CHANGE_OPTIONS = 'setDashboardOptions'
export const CHANGE_BADGES = 'setDashboardBadges'

const state = {
  options: [],
  badges: []
}

const getters = {
  getDashboardOptions (state) {
    return state.options
  },
  getDashboardBadges (state) {
    return state.badges
  }
}

const actions = {
  setDashboardOptions ({commit}, options) {
    commit(CHANGE_OPTIONS, options)
  },
  setDashboardBadges ({commit}, badges) {
    commit(CHANGE_BADGES, badges)
  }
}

const mutations = {
  [CHANGE_OPTIONS] (state, options) {
    state.options = options
  },
  [CHANGE_BADGES] (state, badges) {
    state.badges = badges
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
