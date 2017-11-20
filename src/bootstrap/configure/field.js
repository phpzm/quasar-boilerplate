import { standard, scoping } from 'genesis/support/model/fields'

/**
 * @param {string} query
 * @param {Object} remote
 * @param {Object} filters
 * @returns {Object}
 */
export const parameters = (query, remote, filters) => {
  return Object.assign({}, {query}, {order: remote.reference.label}, filters)
}

/**
 * @param field
 * @param label
 * @param component
 * @param scopes
 * @returns {object}
 */
export default (field, label, component = 'text', scopes = []) => {
  /**
   * Basic properties
   * @type {Object}
   */
  const basic = {
    field: field,
    label: label,
    scopes: scoping(scopes),

    form: {component},
    grid: {},
    all: {}
  }
  /**
   * My overrides
   * @type {Object}
   */
  const custom = {}

  // join all elements to create the configure field
  return Object.assign({}, standard, basic, custom)
}
