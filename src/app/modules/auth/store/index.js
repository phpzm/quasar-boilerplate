import { APP_USER, APP_TOKEN, APP_REMEMBER } from 'src/app/support/index'
import { set, get } from 'src/app/infra/storage'
import { setToken } from 'src/app/infra/services/http/index'

export const CHANGE_USER = 'setAuthUser'

export const CHANGE_TOKEN = 'setAuthToken'

export const CHANGE_REMEMBER = 'setAuthRemember'

const state = {
  user: undefined,
  token: undefined,
  remember: get(APP_REMEMBER)
}

const getters = {
  getAuthUser: (state) => state.user,
  getAuthToken: (state) => state.token,
  getAuthRemember: (state) => state.token
}

const actions = {
  setAuthUser: (context, user) => {
    context.commit(CHANGE_USER, user)
    set(APP_USER, user, state.remember)
  },
  setAuthToken: (context, token) => {
    context.commit(CHANGE_TOKEN, token)
    set(APP_TOKEN, token, state.remember)
    if (token) {
      setToken(token)
    }
  },
  setAuthRemember: (context, remember) => {
    context.commit(CHANGE_REMEMBER, state.remember)
    set(APP_REMEMBER, remember, true)
  }
}

const mutations = {
  [CHANGE_USER] (state, user) {
    state.user = user
  },
  [CHANGE_TOKEN] (state, token) {
    state.token = token
  },
  [CHANGE_REMEMBER] (state, remember) {
    state.remember = remember
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
