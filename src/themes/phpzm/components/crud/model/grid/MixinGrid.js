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
    filters: {
      type: Array,
      default: () => ([])
    },
    pagination: {
      type: Boolean,
      default: () => true
    },
    unity: {
      type: String,
      default: () => 'vw'
    }
  },
  data: () => ({
    columns: [],
    data: [],
    page: 1,
    pages: 1
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
      return this.pagination
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
    this.renderAll()
    this.renderFilters()
  },
  mounted () {
    this.applyFilters()
  }
}
