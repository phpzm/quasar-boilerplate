export default {
  methods: {
    /**
     * @param {Function} done
     */
    refresh (done) {
      this.$emit('grid.refresh', done)
    },
    /**
     * @param {Object} row
     */
    rowclick (row) {
      this.$emit('grid.rowclick', row)
    },
    /**
     * @param {Object} action
     * @param {Object} row
     */
    handler (action, row) {
      if (typeof action.handler === 'function') {
        action.handler(row, this.columns, this)
      }
    },
    /**
     * @param slot
     * @param cell
     * @returns {Object}
     */
    on (slot, cell) {
      if (typeof slot.on !== 'object') {
        return {}
      }
      return Object.keys(slot.on).reduce((accumulate, key) => {
        const handler = slot.on[key]
        if (typeof handler === 'function') {
          accumulate[key] = (event) => handler(cell.row, this.columns, this, event)
        }
        return accumulate
      }, {})
    },
    /**
     * @param slot
     * @param cell
     * @returns {Object}
     */
    props (slot, cell) {
      const props = slot.props || {}
      return {...props, value: cell.data, record: cell.row, user: this.getAuthUser}
    }
  }
}
