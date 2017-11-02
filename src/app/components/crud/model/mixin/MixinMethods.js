import { actions } from '../../model'

export default {
  methods: {
    /**
     * @param record
     */
    create (record) {
      this.service
        .post(record)
        .then(response => this.then(response, 'create'))
        .catch(error => this.catch(error, 'create', [record]))
    },
    /**
     * @param id
     */
    read (id = '') {
      this.service
        .get(id)
        .then(response => this.then(response, 'read'))
        .catch(error => this.catch(error, 'read', [id]))
    },
    /**
     * @param record
     */
    update (record) {
      this.service
        .put(record)
        .then(response => this.then(response, 'update'))
        .catch(error => this.catch(error, 'update', [record]))
    },
    /**
     * @param id
     */
    delete (id = '') {
      this.service
        .delete(id)
        .then(response => this.then(response, 'delete'))
        .catch(error => this.catch(error, 'delete', [id]))
    },
    /**
     * @param filters
     */
    search (filters = {}) {
      this.service
        .get('', filters)
        .then(response => this.then(response, 'read'))
        .catch(error => this.catch(error, 'search', [filters]))
    },
    /**
     */
    renderAll () {
      this.renderElements()
      this.renderActions()
    },
    /**
     */
    renderElements () {
      // override
    },
    /**
     */
    renderActions () {
      // noinspection JSCheckFunctionSignatures
      const _actions = actions(this, this.actions)
      if (!Array.isArray(_actions)) {
        return
      }
      const buttons = _actions.filter(button => button.scopes.includes(this.scope))

      this.buttons.top = buttons.filter(button => button.positions.includes('top'))
      this.buttons.middle = buttons.filter(button => button.positions.includes('middle'))
      this.buttons.bottom = buttons.filter(button => button.positions.includes('bottom'))
      this.buttons.floating = buttons.filter(button => button.positions.includes('floating'))
    },
    /**
     * @param {Object} action
     */
    handler (action) {
      if (typeof action.handler === 'function') {
        action.handler(this.data, this.columns, this)
      }
    },
    /**
     * @param {string} path
     * @param {Object} query
     */
    browse (path, query = {}) {
      if (query !== undefined) {
        query = Object.assign({}, query, this.$route.query)
      }
      this.$router.push({path, query})
    }
  }
}
