export default {
  methods: {
    /**
     * @param path
     */
    navigate (path) {
      this.$router.push(path)
    },
    /**
     * @param {object} action
     * @param {object} record
     */
    handlerAction (action, record = null) {
      if (action.handler) {
        if (!record) {
          record = this.record
        }
        action.handler(record, this.schemas, this)
      }
    },
    updateAvailable () {
      this.available = this.schemas
        .filter(_schema => {
          return (_schema.scopes && _schema.scopes.includes(this.scope)) &&
            (!this.visibility || this.visibility.model.includes(_schema.name))
        })
        .map(_schema => {
          const base = {
            name: _schema.name,
            label: _schema.label,
            editable: this.editable
          }
          const schema = _schema[this.type]
          let override = {}
          if (_schema[this.scope]) {
            override = _schema[this.scope]
          }
          return Object.assign({}, schema, override, base)
        })
    }
  }
}
