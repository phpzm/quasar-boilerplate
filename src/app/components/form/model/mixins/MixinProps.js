export default {
  props: {
    tabs: {
      type: Array,
      default: () => ([])
    },
    fields: {
      type: Array,
      default: () => ([])
    },
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
