import Vue from 'vue'
import * as imports from 'src/bootstrap/vendor/quasar/imports'
import AppButton from 'src/themes/phpzm/components/button/AppButton.vue'

const components = Object.assign({}, imports, {QButton: AppButton})

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
