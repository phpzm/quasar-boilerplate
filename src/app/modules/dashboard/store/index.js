// Types
const APP_MENU = 'APP_MENU'
const APP_WIDTH = 'APP_WIDTH'
const APP_HEIGHT = 'APP_HEIGHT'
const APP_DATA = 'APP_DATA'

const state = {
  app: {
    width: 0,
    height: 0,
    menu: [],
    name: null,
    slogan: null
  }
}

const getters = {
  getAppWidth (state) {
    return state.app.width
  },
  getAppHeight (state) {
    return state.app.height
  },
  getAppMenu (state) {
    return state.app.menu
  },
  getAppName (state) {
    return state.app.name
  },
  getAppSlogan (state) {
    return state.app.slogan
  }
}

const actions = {
  setAppWidth ({commit}, payload) {
    commit(APP_WIDTH, payload)
  },
  setAppHeight ({commit}, payload) {
    commit(APP_HEIGHT, payload)
  },
  setAppMenu ({commit}, payload) {
    commit(APP_MENU, payload)
  },
  setAppData ({commit}, payload) {
    commit(APP_DATA, payload)
  }
}

const mutations = {
  [APP_WIDTH] (state, width) {
    state.app.width = width
  },
  [APP_HEIGHT] (state, height) {
    state.app.height = height
  },
  [APP_MENU] (state, menu) {
    state.app.menu = menu
  },
  [APP_DATA] (state, data) {
    state.app.name = data.name || null
    state.app.slogan = data.slogan || null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
