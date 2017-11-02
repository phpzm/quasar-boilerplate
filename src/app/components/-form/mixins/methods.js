import _ from 'lodash'

import * as Validators from 'vuelidate/lib/validators'

// reduce the array to map object
const reduceToObject = (object, item) => {
  object[item.name] = item
  return object
}

/**
 * @param items
 * @param name
 * @param property
 * @return {*|boolean}
 */
const isFunction = (items, name, property) => {
  return items[name] && items[name][property] && typeof items[name][property] === 'function'
}

export default {
  methods: {
    /**
     */
    checkAllDependsOn () {
      Object.keys(this.items).forEach(item => {
        this.checkDependsOn(this.items[item])
      })
    },
    /**
     * @param item
     */
    checkDependsOn (item) {
      const dependsOn = item.dependsOn || null

      if (_.isString(dependsOn)) {
        item.dependsIsOk = this.record[dependsOn] || false
      }
      else if (_.isArray(dependsOn)) {
        for (let i in dependsOn) {
          item.dependsIsOk = (this.record[dependsOn[i]])
        }
      }
      else if (_.isObject(dependsOn)) {
        let oks = []
        const self = this
        Object.keys(dependsOn).forEach(key => {
          if (_.isArray(dependsOn[key]) && _.findIndex(dependsOn[key], value => self.record[key] === value) >= 0) {
            oks.push(true)
          }
          else if (self.record[key] === dependsOn[key]) {
            oks.push(true)
          }
        })
        item.dependsIsOk = (oks.length === Object.keys(dependsOn).length)
      }
    },
    /**
     * @param tab
     * @return {function(*)}
     */
    filterByTab (tab) {
      return item => {
        return item.tab === tab
      }
    },
    /**
     * @param schemas
     * @param environment
     * @returns {*}
     */
    parseItems (schemas, environment) {
      if (!Array.isArray(schemas)) {
        return {}
      }
      return schemas.reduce(reduceToObject, {})
    },
    /**
     * @param schemas
     * @returns {*}
     */
    generateValidations (schemas) {
      if (!Array.isArray(schemas)) {
        return {}
      }
      const validations = {}
      schemas
        .filter(_schema => {
          return _schema.form && !!_schema.form.validate
        })
        .forEach(_schema => {
          validations[_schema.name] = this.configureValidation(_schema.form.validate)
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
     * @param items
     * @return {{}}
     */
    parseRecord (items) {
      const record = {}
      Object.keys(items).forEach(_key => {
        this.checkDependsOn(items[_key])
        let query = this.$route.query[_key]
        record[_key] = query || items[_key].default
      })
      return record
    },
    /**
     * @param tab
     * @return {{}}
     */
    searchItemsFromTab (tab) {
      const items = {}
      Object.keys(this.items).forEach(_key => {
        if (this.items[_key].tab === tab) {
          items[_key] = this.items[_key]
        }
      })
      return items
    },
    /**
     * @param name
     */
    changeRecord (name) {
      if (this.$v.record[name]) {
        this.$v.record[name].$touch()
      }
      this.checkAllDependsOn()
      if (isFunction(this.items, name, 'change')) {
        this.items[name].change(this.record, this.items, this)
      }
      this.$emit('input', this.record)
    },
    /**
     * @param name
     */
    mouseupRecord (name) {
      if (isFunction(this.items, name, 'mouseup')) {
        this.items[name].mouseup(this.record, this.items, this)
      }
      this.$emit('mouseup', this.record)
    },
    /**
     * @param name
     */
    keypressRecord (name) {
      if (isFunction(this.items, name, 'keypress')) {
        this.items[name].keypress(this.record, this.items, this)
      }
      this.$emit('keypress', this.record)
    },
    /**
     * @param name
     */
    keyupRecord (name) {
      if (isFunction(this.items, name, 'keyup')) {
        this.items[name].keyup(this.record, this.items, this)
      }
      this.$emit('keyup', this.record)
    },
    /**
     * @param name
     */
    blurRecord (name) {
      if (isFunction(this.items, name, 'blur')) {
        this.items[name].blur(this.record, this.items, this)
      }
      this.$emit('blur', this.record)
    },
    /**
     * @param name
     */
    focusRecord (name) {
      if (isFunction(this.items, name, 'focus')) {
        this.items[name].focus(this.record, this.items, this)
      }
      this.$emit('focus', this.record)
    },
    /**
     * @return {boolean}
     */
    updateSchemas () {
      this.items = this.parseItems(this.available)
    },
    /**
     */
    updateRecord () {
      this.record = Object.assign({}, this.parseRecord(this.items), this.record, this.value)

      Object.keys(this.items).forEach(name => {
        let item = this.items[name]
        if (isFunction(this.items, name, 'change')) {
          item.change(this.record, this.items, this)
        }
        this.checkDependsOn(item)
      })
    },
    /**
     * @param force
     */
    updateForm (force) {
      this.updateSchemas()
      this.updateRecord()
      this.formTouch()
      if (force) {
        this.updateSelected()
      }
    },
    /**
     */
    updateSelected () {
      if (this.tabs.length) {
        this.selected = this.tabs[0].value
      }
    },
    /**
     */
    formTouch () {
      this.$v.$touch()
    },
    /**
     */
    formReset () {
      this.$v.$reset()
    },
    /**
     * @param {String} name
     * @return {Array}
     */
    getErrors (name) {
      const errors = []
      if (this.items[name].validate && this.$v.record[name] && this.$v.record[name].$error) {
        Object.keys(this.items[name].validate).forEach(rule => {
          const status = this.$v.record[name][rule]
          const parameters = this.$v.record[name].$params[rule]
          errors.push({rule, status, parameters})
        })
      }
      return errors
    }
  }
}
