export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    scope: {
      type: String,
      default: 'form'
    },
    tabs: {
      type: Array,
      default: () => ([])
    },
    schemas: {
      required: true,
      type: Array,
      default: () => ([])
    },
    value: {
      type: Object,
      default: () => ({})
    },
    actions: {
      default: () => ([])
    },
    editable: {
      default: false
    },
    errors: {
      type: Object,
      default: () => ({})
    },
    stylish: {
      type: Object,
      default: () => ({})
    },
    debug: {
      type: Boolean,
      default: false
    }
  }
}
