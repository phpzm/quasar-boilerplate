import Vue from 'vue'

import FieldText from 'src/modules/Common/Fields/FieldText'
import FieldPassword from 'src/modules/Common/Fields/FieldPassword'
import FieldCheckbox from 'src/modules/Common/Fields/FieldCheckbox'

Vue.component('field-text', FieldText)
Vue.component('field-password', FieldPassword)
Vue.component('field-checkbox', FieldCheckbox)

export default {
  FieldText, FieldPassword, FieldCheckbox
}
