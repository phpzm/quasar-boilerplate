import { formatMoney, formatPhone, formatBoolean, formatDate, formatDateTime } from 'src/app/support/format'

/**
 * @param field
 * @param label
 * @param component
 * @param scopes
 * @returns {object}
 */
export default (field, label, component = 'text', scopes = []) => {
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
    $assign (property, options) {
      this[property] = Object.assign({}, this[property], options)
      return this
    },
    $filter (rule = 'like', value = '', component = '') {
      this.grid.filter = {rule, value, component}
      return this
    },
    $tab (name) {
      this.form.tab = name
      return this
    },
    $readonly () {
      this.form.disabled = true
      return this
    },
    $pk () {
      return this.$readonly().$out('create').$grid({width: '60px'})
    },
    $validate (rule, value = true) {
      if (!this.form.validate) {
        this.form.validate = {}
      }
      this.form.validate[rule] = value
      return this
    },
    $required (require = true) {
      if (require) {
        this.$validate('required')
      }
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
    $img (className = 'avatar') {
      this.grid.format = (value) => {
        return `<img class="grid-${className}-image" src="${value}"/>`
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
      this.form.time = true
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
    $password () {
      this.form.component = 'password'
      return this
    },
    $phone () {
      this.form.component = 'phone'
      this.grid.format = formatPhone
      return this
    },
    $select (options = [], multiple = false) {
      this.form.component = 'select'
      this.form.multiple = multiple
      this.form.options = options
      this.form.chips = multiple
      this.grid.format = value => {
        if (Array.isArray(options)) {
          const option = options.find(option => String(option.value) === String(value))
          return option && option.label ? option.label : ''
        }
        return value
      }
      return this
    },
    $pivot (options = {}) {
      this.form.component = 'pivot'
      this.form.options = options
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
      if (this.grid.filter && !this.grid.filter.component) {
        this.grid.filter.component = this.form.component
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
