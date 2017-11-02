export default {
  mounted () {
    this.updateForm(true)
  },
  updated () {
    if (!this.selected) {
      this.updateSelected()
    }
  }
}
