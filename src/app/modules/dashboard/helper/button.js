/**
 * @param {string} id
 * @param {int} permission
 * @param {string} label
 * @param {Function} handler
 * @param {string} icon
 * @param {string} tooltip
 * @param {string} color
 * @returns {Object}
 */
export default (id, permission, label, handler, icon = '', tooltip = '', color = 'white') => {
  const base = {
    id, permission, label, handler, icon, tooltip, color
  }
  // const scopes = ['index', 'create', 'edit', 'view']
  // const positions = ['top', 'bottom', 'middle', 'floating']

  return {
    /**
     * @param {Object} options
     * @returns {Object}
     */
    $options (options) {
      Object.keys(options).forEach(key => (base[key] = options[key]))
      return this
    },
    /**
     * @param {Function} [validate]
     * @returns {Object}
     */
    $validate (validate = null) {
      base.validate = validate || ((record, schemas, $component) => !$component.status)
      return this
    },
    /**
     * @param {Array} scopes
     * @param {Array} positions
     * @returns {Object}
     */
    $middle (scopes = ['index'], positions = ['middle']) {
      return Object.assign({}, base, {scopes, positions})
    },
    /**
     * @param {Array} scopes
     * @param {Array} positions
     * @returns {Object}
     */
    $grid (scopes = ['index'], positions = ['top', 'bottom']) {
      return Object.assign({}, base, {scopes, positions})
    },
    /**
     * @param {Array} scopes
     * @param {Array} positions
     * @returns {Object}
     */
    $form (scopes = ['create', 'view', 'edit'], positions = ['top', 'bottom']) {
      return Object.assign({}, base, {scopes, positions})
    },
    /**
     * @param {Array} scopes
     * @param {Array} positions
     * @param {Object} options
     * @returns {Object}
     */
    $render (scopes = [], positions = [], options = {}) {
      return Object.assign({}, base, {scopes, positions}, options)
    },
    /**
     * @param {Array} positions
     * @param {Object} options
     * @returns {Object}
     */
    $all (positions = [], options = {}) {
      return Object.assign({}, base, {scopes: ['index', 'create', 'view', 'edit'], positions}, options)
    }
  }
}
