export default {
  computed: {
    direction () {
      return this.position === 'left' ? 'right' : 'left'
    }
  }
}
