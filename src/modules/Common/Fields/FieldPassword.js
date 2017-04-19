import AbstractInput from 'src/modules/Common/Fields/Contracts/AbstractInput.vue'

const FieldPassword = {
  extends: AbstractInput,
  name: 'field-password',
  data: () => ({
    type: 'password'
  })
}

export default FieldPassword
