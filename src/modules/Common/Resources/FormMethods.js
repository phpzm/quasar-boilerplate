const FormMethods = {
  /**
   * @param record
   */
  setData (record) {
    this.entry = record
  },
  /**
   * @param record
   */
  applyRecord (record) {
    this.load(true)
    if (this.model[this.action]) {
      this.model[this.action](record)
        .then((response) => {
          this.__record(response.data)
          this.toast(this.success.replace('{primaryKey}', response.data[this.model.primaryKey]))
          this.load(false)
        })
        .catch((error) => {
          this.error(error)
        })
    }
  },
  /**
   * @param error
   */
  error (error) {
    this.error = error
    this.load(false)
  }
}

export default FormMethods
