export default {
  watch: {
    data: {
      handler () {
        this.mount()
      },
      deep: true
    },
    '$route.query' () {
      this.fetchAll()
    }
  }
}
