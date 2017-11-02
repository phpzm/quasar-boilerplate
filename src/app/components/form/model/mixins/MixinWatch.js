export default {
  watch: {
    data (data) {
      Object.keys(data).forEach(key => (this.record[key] = data[key]))
    }
  }
}
