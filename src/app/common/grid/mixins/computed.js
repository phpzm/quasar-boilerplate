export default {
  computed: {
    empty () {
      return !!this.records.length
    },
    headerStyle () {
      const style = {
        'display': 'flex'
      }
      if (this.widthFields > 100) {
        style.display = 'inline-flex'
      }
      return style
    },
    widthFields () {
      return this.available.reduce((accumulator, field) => {
        return accumulator + parseInt(field.width ? field.width : 20)
      }, 0)
    }
  }
}
