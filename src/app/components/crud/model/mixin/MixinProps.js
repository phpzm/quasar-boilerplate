export default {
  props: {
    service: {
      required: true,
      default: () => ({})
    },
    path: {
      required: true,
      default: () => ''
    },
    schemas: {
      required: true,
      default: () => ([])
    },
    actions: {
      default: () => null
    },
    scope: {
      default: () => 'index'
    },
    id: {
      default: () => 'id'
    }
  }
}
