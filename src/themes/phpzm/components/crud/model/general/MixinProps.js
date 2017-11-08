export default {
  props: {
    service: {
      type: Object,
      required: true,
      default: () => ({})
    },
    path: {
      type: String,
      required: true,
      default: () => ''
    },
    schemas: {
      type: Array,
      required: true,
      default: () => ([])
    },
    actions: {
      default: () => null
    },
    scopes: {
      type: Object,
      default: () => ({
        index: {},
        create: {
          method: 'create'
        },
        edit: {
          method: 'update'
        },
        view: {
          readonly: true
        }
      })
    },
    scope: {
      type: String,
      default: () => 'index'
    },
    component: {
      type: String,
      default: () => 'field'
    },
    id: {
      type: String,
      default: () => 'id'
    },
    tab: {
      type: String,
      default: () => ''
    },
    direction: {
      type: String,
      default: () => 'right'
    },
    position: {
      type: String,
      default: () => 'left'
    },
    timeout: {
      type: Number,
      default: () => 100
    },
    changer: {
      type: String,
      default: () => '~'
    },
    debug: {
      type: Boolean,
      default: () => false
    }
  }
}
