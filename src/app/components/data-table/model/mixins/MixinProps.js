export default {
  props: {
    columns: {
      type: Array,
      default: () => ([])
    },
    data: {
      type: Array,
      default: () => ([])
    },
    actions: {
      type: Array,
      default: () => ([])
    }
  }
}
