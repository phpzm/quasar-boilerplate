import Vue from 'vue'
import Vuex from 'vuex'

import { strict, APP_USER, APP_TOKEN } from 'src/support/index'
import { get } from 'src/infra/storage'

import state from 'src/infra/store/schema/state'
import mutations from 'src/infra/store/schema/mutations'

import * as actions from 'src/infra/store/schema/actions'
import * as getters from 'src/infra/store/schema/getters'

import modules from 'src/infra/store/schema/modules'

Vue.use(Vuex)

const store = new Vuex.Store({state, mutations, actions, getters, modules, strict})

const user = get(APP_USER)
if (user) {
  store.dispatch('changeUser', user)
}
const token = get(APP_TOKEN)
if (token) {
  store.dispatch('changeToken', token)
}

export default store
