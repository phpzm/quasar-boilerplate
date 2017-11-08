import Vue from 'vue'
import './fields'
import AppDebugger from './debugger/AppDebugger.vue'
import AppLink from './link/AppLink.vue'
import AppTooltip from './tooltip/AppTooltip.vue'

Vue.component('app-debugger', AppDebugger)
Vue.component('app-link', AppLink)
Vue.component('app-tooltip', AppTooltip)
