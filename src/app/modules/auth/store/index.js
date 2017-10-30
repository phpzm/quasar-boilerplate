import { APP_USER, APP_TOKEN } from 'src/app/support/index'
import { set } from 'src/app/infra/storage'
import { setToken } from 'src/app/infra/services/http/index'

export const CHANGE_USER = 'setAppUser'

export const CHANGE_TOKEN = 'setAppToken'

const state = {
  user: undefined,
  token: process.env.DEV ? 'dev' : undefined
}

const getters = {
  AppUser: (state) => state.user,
  AppToken: (state) => state.token
}

const actions = {
  changeUser: (context, user, remember) => {
    context.commit(CHANGE_USER, user)
    if (user) {
      set(APP_USER, user, remember)
      return
    }
    [true, false].forEach(flag => set(APP_USER, undefined, flag))
  },
  changeToken: (context, token, remember) => {
    context.commit(CHANGE_TOKEN, token)
    setToken(token)
    if (token) {
      set(APP_TOKEN, token, remember)
      return
    }
    [true, false].forEach(flag => set(APP_TOKEN, undefined, flag))
  }
}

const mutations = {
  [CHANGE_USER] (state, user) {
    state.user = user
  },
  [CHANGE_TOKEN] (state, token) {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
