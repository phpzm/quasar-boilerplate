import Vue from 'vue'

import FieldText from 'src/app/components/fields/components/text.vue'
import FieldMoney from 'src/app/components/fields/components/money.vue'
import FieldCheckbox from 'src/app/components/fields/components/checkbox.vue'
import FieldSelect from 'src/app/components/fields/components/select.vue'
import FieldTextarea from 'src/app/components/fields/components/textarea.vue'
import FieldWysiwyg from 'src/app/components/fields/components/wysiwyg.vue'
import FieldSeparator from 'src/app/components/fields/components/separator.vue'
import FieldHtml from 'src/app/components/fields/components/html.vue'
import FieldDate from 'src/app/components/fields/components/date.vue'
import FieldToggle from 'src/app/components/fields/components/toggle.vue'
import FieldColor from 'src/app/components/fields/components/color.vue'
import FieldTime from 'src/app/components/fields/components/time.vue'
import FieldFile from 'src/app/components/fields/components/file.vue'
import FieldPhone from 'src/app/components/fields/components/phone.vue'
import FieldNumeric from 'src/app/components/fields/components/numeric.vue'

import FieldFunctional from 'src/app/components/fields/functional'

Vue.component('field-text', FieldText)
Vue.component('field-money', FieldMoney)
Vue.component('field-checkbox', FieldCheckbox)
Vue.component('field-select', FieldSelect)
Vue.component('field-textarea', FieldTextarea)
Vue.component('field-wysiwyg', FieldWysiwyg)
Vue.component('field-separator', FieldSeparator)
Vue.component('field-html', FieldHtml)
Vue.component('field-date', FieldDate)
Vue.component('field-toggle', FieldToggle)
Vue.component('field-color', FieldColor)
Vue.component('field-time', FieldTime)
Vue.component('field-file', FieldFile)
Vue.component('field-phone', FieldPhone)
Vue.component('field-numeric', FieldNumeric)

Vue.component('field-functional', FieldFunctional)
