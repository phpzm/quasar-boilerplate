export default {
  watch: {
    /**
     * @param data
     */
    data (data) {
      Object.keys(data).forEach(key => (this.record[key] = data[key]))
    }
  }
}
