import configureSearch from 'src/bootstrap/configure/search'
import populateGrid from 'src/bootstrap/populate/grid'

export default {
  props: {
    scope: {
      default: () => 'index'
    },
    handlers: {
      type: Object,
      default () {
        return {
          read: (response) => populateGrid(this, response),
          delete: (response) => this.search()
        }
      }
    },
    slots: {
      type: Array,
      default: () => ([])
    },
    filters: {
      type: Array,
      default: () => ([])
    },
    paginate: {
      type: Boolean,
      default: () => true
    },
    unity: {
      type: String,
      default: () => 'vw'
    },
    bottom: {
      type: Boolean,
      default: () => true
    },
    top: {
      type: Boolean,
      default: () => true
    },
    floating: {
      type: Boolean,
      default: () => true
    },
    filtering: {
      type: Boolean,
      default: () => true
    },
    styles: {
      type: Object,
      default: () => ({
        height: 'calc(100vh - 290px)',
        minHeight: '200px'
      })
    },
    bodyStyle: {
      type: Object,
      default: () => ({
        height: 'calc(100vh - 330px)',
        minHeight: '170px'
      })
    }
  },
  data: () => ({
    columns: [],
    data: [],
    page: 1,
    pages: 1,
    limit: 25,
    total: 1
  }),
  methods: {
    /**
     */
    renderElements () {
      this.columns = this.schemas.filter(this.filterColumns).map(this.mapColumns)
      let method = 'unshift'
      if (this.position === 'right') {
        method = 'push'
      }
      this.columns[method]({field: 'options', label: 'Opções', width: '70px'})
    },
    /**
     * @param {Object} item
     * @returns {Array}
     */
    mapColumns (item) {
      const assign = {
        field: item.grid.field,
        width: typeof item.grid.width === 'number' ? item.grid.width + this.unity : item.grid.width
      }
      return Object.assign({}, item.grid, assign)
    },
    /**
     * @param {Object} item
     * @returns {Object}
     */
    filterColumns (item) {
      return item.scopes.includes(this.scope)
    },
    /**
     * @returns {boolean}
     */
    isPaginated () {
      return this.paginate
    },
    /**
     * @param {int} page
     */
    changePage (page) {
      this.page = page
      this.browse(this.path, {page: this.page, limit: this.limit})
    },
    /**
     * @param {int} limit
     */
    changeLimit (limit) {
      this.limit = limit
      this.changePage(1)
    },
    /**
     */
    fetchData () {
      const filters = Object.keys(this.filter.record).reduce((accumulate, key) => {
        let value = this.filter.record[key]
        if (this.filter.rules[key]) {
          value = this.filter.rules[key] + this.filter.char + value
        }
        accumulate[key] = value
        return accumulate
      }, {})

      const search = () => {
        this.search(configureSearch(this.page, this.limit, filters))
      }

      window.setTimeout(search, this.timeout)
    },
    /**
     * @param {AxiosError} error
     * @param {string} method
     * @param {Array} parameters
     */
    catch (error, method, parameters) {
      console.log('~>', this.$options.name, error)
    }
  },
  created () {
    if (this.$route.query.page) {
      this.page = parseInt(this.$route.query.page)
      this.pages = parseInt(this.$route.query.page)
    }
    if (this.$route.query.limit) {
      this.limit = parseInt(this.$route.query.limit)
    }
    this.renderAll()
    this.renderFilters()
    this.loadFilters()
  },
  mounted () {
    this.fetchData()
  }
}
