export default {
  watch: {
    /**
     * @param data
     */
    data (data) {
      Object.keys(data).forEach(key => (this.record[key] = data[key]))
    },
    /**
     * @param invalid
     */
    '$v.$invalid' (invalid) {
      this.$emit('form-valid', !invalid)
    }
  }
}
