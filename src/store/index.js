import Vue from 'vue'
import Vuex from 'vuex'

import state from 'src/store/schema/state'
import mutations from 'src/store/schema/mutations'

import * as actions from 'src/store/schema/actions'
import * as getters from 'src/store/schema/getters'

import modules from 'src/store/schema/modules'

Vue.use(Vuex)

export default new Vuex.Store({ state, mutations, actions, getters, modules })
