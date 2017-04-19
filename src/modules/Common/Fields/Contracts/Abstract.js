import { Utils } from 'quasar-framework'

const schema = {
  id: Utils.uid(),
  label: '',
  title: '',
  placeholder: '',
  mask: '',
  disabled: false,
  required: true
}

const Abstract = {
  name: 'field-abstract',
  props: {
    value: {
      type: String
    },
    schema: {
      type: Object,
      default: () => schema
    }
  },
  data: () => ({}),
  computed: {
    label () {
      return this.schema.label + ' ' + (this.schema.required ? '*' : '')
    }
  },
  create () {
    this.schema = Object.assign({}, schema, this.schema)
  },
  methods: {
    /**
     * @param value
     */
    setValue (value) {
      this.$refs.input.value = value
      this.$emit('input', value)
    },
    /**
     * @return mixed
     */
    getValue () {
      return this.$refs.input.value
    },
    fieldKeyDown (e) {
    },
    fieldKeyPress (e) {
    },
    fieldKeyUp (e) {
    },
    fieldTextInput (e) {
    },
    fieldMouseUp (e) {
    },
    fieldFocusIn (e) {
    },
    fieldFocusOut (e) {
    },
    fieldBlur (e) {
      this.$emit('blur')
    },
    fieldCut (e) {
    },
    fieldCopy (e) {
    },
    fieldPaste (e) {
    }
  }
}

export default Abstract
