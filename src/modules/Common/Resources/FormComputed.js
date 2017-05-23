const FormComputed = {
  computed: {
    buttonsTop () {
      return this.actions.filter(__action => __action.position.includes('top'))
    },
    buttonsBottom () {
      return this.actions.filter(__action => __action.position.includes('bottom'))
    },
    buttonsFloating () {
      return this.actions.filter(__action => __action.position.includes('floating'))
    }
  }
}

export default FormComputed
