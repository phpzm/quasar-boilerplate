export default {
  computed: {
    /**
     * @return {{}}
     */
    itemsFromTab () {
      // TODO: use reduce
      const itemsFromTab = {}
      this.tabs.forEach(__tab => {
        itemsFromTab[__tab.value] = this.searchItemsFromTab(__tab.value)
      })
      return itemsFromTab
    },
    $valid () {
      if (this.$v && this.$v.$invalid) {
        let valid = true
        Object.keys(this.items).forEach(name => {
          let validation = this.$v.record[name]
          if (validation && validation.$invalid) {
            if (this.items[name].dependsIsOk === false || this.items[name].hidden === true) {
              return
            }
            valid = false
          }
        })
        return valid
      }
      return true
    }
  }
}
