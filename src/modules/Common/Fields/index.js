import Vue from 'vue'

import FieldText from 'src/modules/Common/Fields/FieldText'
import FieldPassword from 'src/modules/Common/Fields/FieldPassword'
import FieldCheckbox from 'src/modules/Common/Fields/FieldCheckbox'
import FieldRadio from 'src/modules/Common/Fields/FieldRadio'

Vue.component('field-text', FieldText)
Vue.component('field-password', FieldPassword)
Vue.component('field-checkbox', FieldCheckbox)
Vue.component('field-radio', FieldRadio)

export default {
  FieldText, FieldPassword, FieldCheckbox, FieldRadio
}
