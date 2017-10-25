export default {
  created () {
    // window.addEventListener('keyup', this.keyup, false)
  },
  destroyed () {
    // window.removeEventListener('keyup', this.keyup, false)
  },
  mounted () {
    this.mount()
    if (this.api) {
      return this.fetchRecord(this.$update)
    }
    this.$update()
  }
}
