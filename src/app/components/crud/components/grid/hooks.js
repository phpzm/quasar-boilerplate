export default {
  mounted () {
    window.setTimeout(() => {
      this.mount()
      this.fetchAll()
    }, 100)
  }
}
