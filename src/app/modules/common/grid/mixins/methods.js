export default {
  methods: {
    navigate (path) {
      this.$router.push(path)
    },
    reloadRecords () {
      this.$emit('reload-records', this.records, this.controls.limit)
    },
    changeOrder () {
      this.$emit('change-order', this.controls.order, this.controls.limit)
    },
    changeVisibility () {
      this.$emit('change-visibility', this.controls.visibility)
    },
    changeFilter () {
      this.$emit('change-filter', this.controls.filter, this.controls.limit)
    },
    changeSearch () {
      this.$emit('change-search', this.controls.search, this.controls.limit)
    },
    changePage () {
      if (this.controls.pagination <= this.pages) {
        return this.$emit('change-page', this.controls.pagination, this.controls.limit)
      }
      this.controls.pagination = this.pages
    },
    changeLimit () {
      this.controls.pagination = 1
      this.changePage()
    },
    changeSort (sorted) {
      this.$emit('change-sort', sorted)
    },
    /**
     * @param schema
     * @return Object
     */
    parseClassHeader (schema) {
      return ['cell', schema.width ? 'has-' + schema.width : '', this.orderly ? 'orderly' : '']
    },
    /**
     * @param schema
     * @return Object
     */
    parseStyleHeader (schema) {
      const style = schema.style ? schema.style.header : {}
      if (this.widthFields < 100) {
        return style
      }
      if (!schema.grid) {
        return style
      }
      return Object.assign({}, schema.grid.width, style)
    }
  }
}
