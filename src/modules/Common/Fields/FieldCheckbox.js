import AbstractInput from 'src/modules/Common/Fields/AbstractInput.vue'

const FieldCheckbox = {
  extends: AbstractInput,
  name: 'field-checkbox',
  template:
    `<div>
      <label>
        <q-checkbox v-model="checked" disable></q-checkbox>
        Checkbox Label
      </label>
    </div>`,
  data: () => ({
  })
}

export default FieldCheckbox
