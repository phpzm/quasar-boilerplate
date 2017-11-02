/**
 * @param {Array} fields
 * @param {string} scope
 * @returns {Array}
 */
export const filter = (fields, scope) => {
  return fields.filter(field => scope ? field.scopes.includes(scope) : true)
}

/**
 * @param field
 * @param label
 * @param component
 * @param scopes
 * @returns {object}
 */
export const field = (field, label, component, scopes = []) => {
  const defaults = ['index', 'view', 'create', 'edit']

  if (!Array.isArray(scopes)) {
    scopes = defaults
  }
  if (!scopes.length) {
    scopes = defaults
  }

  return {
    field: field,
    label: label,
    scopes: scopes,
    form: {component: component},
    grid: {},
    all: {},
    $scopes (scopes) {
      this.scopes = scopes
      return this
    },
    $in (scope) {
      this.scopes = [scope]
      return this
    },
    $out (scope) {
      this.scopes = defaults.filter(item => item !== scope)
      return this
    },
    $form (form) {
      return this.$assign('form', form)
    },
    $grid (grid) {
      return this.$assign('grid', grid)
    },
    $all (all) {
      return this.$assign('all', all)
    },
    $assign (property, value) {
      this[property] = Object.assign({}, this[property], value)
      return this
    },
    $validate (rule, value) {
      if (!this.form.validate) {
        this.form.validate = {}
      }
      this.form.validate[rule] = value
      return this
    },
    $link (path) {
      this.grid.component = 'router-link'
      this.grid.binding = (record, schema) => {
        let to = String(path)
        Object.keys(record).forEach(property => {
          to = to.replace(`{${property}}`, record[property])
        })
        return {
          to: to
        }
      }
      return this
    },
    $render () {
      const base = {
        field: this.field,
        label: this.label
      }
      return {
        ...base,
        scopes: this.scopes,
        form: Object.assign({}, base, this.form, this.all),
        grid: Object.assign({}, base, this.grid, this.all)
      }
    }
  }
}

/**
 * @param {string} icon
 * @param {string} label
 * @param {string} tooltip
 * @returns {Object}
 */
export const meta = (icon, label, tooltip) => {
  return {icon, label, tooltip}
}

/**
 * @param {string} icon
 * @param {string} label
 * @param {string} path
 * @returns {Function}
 */
export const menu = (icon, label, path) => {
  return to => {
    return {
      to: to(path),
      label: label,
      left: {
        icon: icon
      }
    }
  }
}

export default {
  filter, field, meta, menu
}
