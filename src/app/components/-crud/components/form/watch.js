export default {
  watch: {
    data: {
      handler () {
        this.mount()
      },
      deep: true
    },
    value: {
      handler (record) {
        this.record = record
      },
      deep: true
    },
    '$route.query' () {
      this.mount()
      if (this.api) {
        return this.fetchRecord(this.$update)
      }
      this.$update()
    }
  }
}
