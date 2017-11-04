import configureField from 'src/bootstrap/configure/field'
import item from 'src/app/modules/dashboard/helper/item'

/**
 * @param field
 * @param label
 * @param component
 * @param scopes
 * @returns {object}
 */
export const field = configureField

/**
 * @param {Array} fields
 * @param {string} scope
 * @returns {Array}
 */
export const filter = (fields, scope) => {
  return fields.filter(field => scope ? field.scopes && field.scopes.includes(scope) : true)
}

/**
 * @param {string} icon
 * @param {string} label
 * @param {string} tooltip
 * @returns {Object}
 */
export const meta = (icon, label, tooltip) => ({icon, label, tooltip})

/**
 * @param {string} icon
 * @param {string} label
 * @param {string} path
 * @param {Boolean} exact
 * @param {string} tooltip
 * @param {string} id
 * @returns {Function}
 */
export const menu = (icon, label, path, exact = false, tooltip = '', id = '') => {
  return (to) => item(id, to(path), label, icon, exact, tooltip)
}

/**
 * @param {string} uri
 * @param {Object} reference
 * @param {string} referenced
 */
export const pivot = (uri, reference, referenced) => ({uri, reference, referenced})

/**
 * @type {Object}
 */
export default {
  filter, field, meta, menu, pivot
}
