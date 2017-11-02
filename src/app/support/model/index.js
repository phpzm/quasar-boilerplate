/**
 * @param {Array} fields
 * @param {string} scope
 * @returns {Array}
 */
import { formatMoney, formatPhone, formatBoolean, formatDate, formatDateTime } from 'src/app/support/format'

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
export const field = (field, label, component = 'text', scopes = []) => {
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
    $validate (rule, value = true) {
      if (!this.form.validate) {
        this.form.validate = {}
      }
      this.form.validate[rule] = value
      return this
    },
    $link (path) {
      this.grid.format = (value, row) => {
        let href = String(path)
        Object.keys(row).forEach(property => {
          href = href.replace(`{${property}}`, row[property])
        })
        return `<a href="#${href}">${value}</a>`
      }
      return this
    },
    $checkbox () {
      this.form.component = 'checkbox'
      this.grid.format = formatBoolean
      return this
    },
    $color () {
      this.form.component = 'color'
      return this
    },
    $date () {
      this.form.component = 'date'
      this.grid.format = formatDate
      return this
    },
    $datetime () {
      this.form.component = 'date'
      this.grid.format = formatDateTime
      return this
    },
    $file () {
      this.form.component = 'file'
      return this
    },
    $html () {
      this.form.component = 'html'
      return this
    },
    $input () {
      this.form.component = 'input'
      return this
    },
    $money () {
      this.form.component = 'money'
      this.grid.format = formatMoney
      return this
    },
    $numeric () {
      this.form.component = 'numeric'
      return this
    },
    $phone () {
      this.form.component = 'phone'
      this.grid.format = formatPhone
      return this
    },
    $select () {
      this.form.component = 'select'
      return this
    },
    $separator () {
      this.form.component = 'separator'
      return this
    },
    $text () {
      this.form.component = 'text'
      return this
    },
    $textarea () {
      this.form.component = 'textarea'
      return this
    },
    $time () {
      this.form.component = 'time'
      return this
    },
    $toggle () {
      this.form.component = 'toggle'
      return this
    },
    $wysiwyg () {
      this.form.component = 'wysiwyg'
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
