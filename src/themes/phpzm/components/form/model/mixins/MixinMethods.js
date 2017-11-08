import * as Validators from 'vuelidate/lib/validators'

const reduce = (accumulate, item) => {
  accumulate[item.field] = item
  return accumulate
}

export default {
  methods: {
    formInput (field) {
      if (this.$v.record[field]) {
        this.$v.record[field].$touch()
      }

      if (this.schemas[field].events && typeof this.schemas[field].events.change === 'function') {
        this.schemas[field].events.change(this.record, this.schemas, this)
      }

      this.schemas[field].errors = this.getErrors(field)

      this.$emit('form~input', this.record)
      this.$emit('form~valid', !this.$v.$invalid)
    },
    /**
     * @param {string} event
     * @param {Vue} schema
     */
    formEvent (event, schema) {
      const field = schema.field
      if (this.schemas[field].events && typeof this.schemas[field].events[event] === 'function') {
        this.schemas[field].events[event](this.record, this.schemas, this)
      }
    },
    /**
     */
    touch () {
      this.$v.$touch()
    },
    /**
     */
    reset () {
      this.$v.$reset()
    },
    /**
     * @param fields
     * @returns {Object}
     */
    generateValidations (fields) {
      if (!Array.isArray(fields)) {
        return {}
      }
      const validations = {}
      fields
        .filter(schema => !!schema.validate)
        .forEach(schema => {
          validations[schema.field] = this.configureValidation(schema.validate)
        })
      return validations
    },
    /**
     * @param {Object} validate
     * @return {Object}
     */
    configureValidation (validate) {
      const configure = {}
      Object.keys(validate).forEach(property => {
        let action = Validators[property]
        if (!action.length) {
          configure[property] = action
          return true
        }
        configure[property] = action((validate[property]))
      })
      return configure
    },
    /**
     */
    updateComponents () {
      const components = {}
      if (this.tabs.length) {
        this.tabs.forEach(tab => {
          components[tab.name] = this.fields.filter(field => field.tab === tab.name).reduce(reduce, {})
        })
      }
      this.components = components
    },
    /**
     */
    updateSchemas () {
      this.schemas = this.fields.reduce(reduce, {})
    },
    /**
     */
    updateRecord () {
      const record = {}
      Object.keys(this.schemas).forEach(field => {
        record[field] = this.schemas[field].default
        if (this.$route.query[field]) {
          record[field] = this.$route.query[field]
        }
      })
      this.record = record
    },
    /**
     * @param {String} field
     * @return {Array}
     */
    getErrors (field) {
      const errors = []
      if (this.schemas[field].validate && this.$v.record[field] && this.$v.record[field].$error) {
        Object.keys(this.schemas[field].validate).forEach(rule => {
          const status = this.$v.record[field][rule]
          const parameters = this.$v.record[field].$params[rule]
          errors.push({rule, status, parameters})
        })
      }
      return errors
    },
    /**
     * @param tab
     * @returns {boolean}
     */
    selected (tab) {
      return this.tabDefault === tab.name
    }
  }
}
