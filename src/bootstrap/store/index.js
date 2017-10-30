// Types
export const EXAMPLE = 'EXAMPLE'

const state = {
  domains: {
    example: ''
  }
}

const getters = {
  getExample (state) {
    return state.domains.example
  }
}

const actions = {
  setExample ({commit}, example) {
    commit(EXAMPLE, example)
  }
}

const mutations = {
  [EXAMPLE] ({domains}, example) {
    domains.example = example
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
