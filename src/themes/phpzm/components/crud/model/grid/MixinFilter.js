export default {
  data: () => ({
    filter: {
      active: false,
      columns: [],
      record: {},
      css: {
        padding: '10px 20px 20px 20px',
        height: '100vh',
        maxHeight: '100vh',
        width: '30vw',
        maxWidth: '30vw',
        borderRadius: '0'
      }
    }
  }),
  methods: {
    /**
     */
    filterOpen () {
      this.$refs.filter.open()
    },
    /**
     */
    filterClose () {
      window.setTimeout(this.$refs.filter.close, this.timeout)
    },
    /**
     */
    filterApply () {
      const query = this.$route.query
      Object.keys(this.filter.record).forEach(key => (query[key] = this.filter.record[key]))
      this.browse(this.path, query)
    },
    /**
     */
    filterClear () {
      const query = this.$route.query
      Object.keys(this.filter.record).forEach(key => delete query[key])
      this.browse(this.path, query)
    },
    /**
     * @param {Object} column
     * @returns {Object}
     */
    mapFilters (column) {
      column.width = 100
      column.component = this.componentName(column.filter.component)
      column.value = column.filter.value
      delete column.filter
      return column
    },
    /**
     * @param {Object} accumulate
     * @param {Object} filter
     * @returns {Object}
     */
    reduceFilters (accumulate, filter) {
      accumulate[filter.field] = filter.value
      return accumulate
    },
    /**
     */
    renderFilters () {
      const columns = this.columns.filter(column => true)
      columns.shift()

      const map = item => {
        item.grid.component = this.componentName(item.form.component)
        return item
      }

      const filterColumns = columns.filter(column => column.filter).map(this.mapFilters)
      const filterAdditional = this.filters.map(map).filter(this.filterColumns).map(this.mapColumns)
      console.log('~> renderFilters', filterAdditional)

      const filters = []
      filters.push(...filterColumns)
      filters.push(...filterAdditional)

      this.filter.columns = filters

      this.filter.record = this.filter.columns.reduce(this.reduceFilters, {})
    },
    /**
     */
    applyFilters () {
      const filters = {}
      Object.keys(this.filter.record).forEach((key) => {
        if (this.$route.query[key] === undefined) {
          return
        }
        filters[key] = this.$route.query[key]
      })
      this.$set(this.filter, 'record', filters)

      this.filter.active = !!Object.keys(filters).length

      const search = () => {
        this.search(filters)
      }
      window.setTimeout(search, this.timeout)
    }
  }
}
