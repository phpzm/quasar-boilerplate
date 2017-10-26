import Vue from 'vue'

import FieldText from 'src/app/modules/common/fields/components/input.vue'
import FieldMoney from 'src/app/modules/common/fields/components/money.vue'
import FieldCheckbox from 'src/app/modules/common/fields/components/checkbox.vue'
import FieldSelect from 'src/app/modules/common/fields/components/select.vue'
import FieldTextarea from 'src/app/modules/common/fields/components/textarea.vue'
import FieldWysiwyg from 'src/app/modules/common/fields/components/wysiwyg.vue'
import FieldSeparator from 'src/app/modules/common/fields/components/separator.vue'
import FieldHtml from 'src/app/modules/common/fields/components/html.vue'
import FieldDate from 'src/app/modules/common/fields/components/date.vue'
import FieldToggle from 'src/app/modules/common/fields/components/toggle.vue'
import FieldColor from 'src/app/modules/common/fields/components/color.vue'
import FieldRange from 'src/app/modules/common/fields/components/range.vue'
import FieldTime from 'src/app/modules/common/fields/components/time.vue'
import FieldFile from 'src/app/modules/common/fields/components/file.vue'

import FieldFunctional from 'src/app/modules/common/fields/functional'

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
Vue.component('field-range', FieldRange)
Vue.component('field-time', FieldTime)
Vue.component('field-file', FieldFile)

Vue.component('field-functional', FieldFunctional)
