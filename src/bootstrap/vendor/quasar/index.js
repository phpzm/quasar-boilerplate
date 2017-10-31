import Vue from 'vue'
import * as imports from 'src/bootstrap/vendor/quasar/imports'

Object.keys(imports).forEach(key => {
  Vue.component(key, imports[key])
})
