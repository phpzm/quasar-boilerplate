export default {
  data: () => ({
    filter: {
      active: false,
      columns: [],
      record: {},
      css: {
        padding: '10px 20px 20px 20px',
        height: '100vh',
        maxHeight: '100vh',
        width: '30vw',
        maxWidth: '30vw',
        borderRadius: '0'
      }
    }
  }),
  methods: {
    filterOpen () {
      this.$refs.filter.open()
    },
    filterClose () {
      this.$refs.filter.close()
    },
    filterApply () {
      this.filterClose()
    },
    filterClear () {
      this.filterClose()
    }
  }
}
