import item from 'src/app/modules/dashboard/helper/item'
import { uniqid } from 'src/app/support/utils'
import configureField from 'src/bootstrap/configure/field'
import configureGrid from 'src/bootstrap/configure/grid'
import configureForm from 'src/bootstrap/configure/form'

/**
 * @type {Function}
 *
 * @param field
 * @param label
 * @param component
 * @param scopes
 * @returns {object}
 */
export const field = configureField

/**
 * @type {Function}
 *
 * @param {Resource} service
 * @param {string} path
 * @param {string} id
 * @param {Array} schemas
 * @param {Array} filters
 * @param {Array} actions
 * @param {Object} options
 * @returns {Object}
 */
export const grid = configureGrid

/**
 * @type {Function}
 *
 * @param {Resource} service
 * @param {string} scope
 * @param {string} path
 * @param {string} id
 * @param {Array} schemas
 * @param {Array} actions
 * @param {Object} options
 * @returns {Object}
 */
export const form = configureForm

/**
 * @type {Function}
 *
 * @param {Array} fields
 * @param {string} scope
 * @returns {Array}
 */
export const filter = (fields, scope) => {
  return fields.filter(field => scope ? field.scopes && field.scopes.includes(scope) : true)
}

/**
 * @type {Function}
 *
 * @param {string} icon
 * @param {string} label
 * @param {string} title
 * @param {string} tooltip
 * @param {string} namespace
 * @param {int} permission
 * @returns {Object}
 */
export const meta = (icon, label, title, tooltip = '', namespace = '', permission = 1) => {
  return {icon, label, title, tooltip, namespace, permission}
}

/**
 * @type {Function}
 *
 * @param {string} icon
 * @param {string} label
 * @param {string} path
 * @param {Boolean} exact
 * @param {string} tooltip
 * @param {string} id
 * @param {string} namespace
 * @param {int} permission
 * @returns {Function}
 */
export const menu = (icon, label, path, exact = false, tooltip = '', id = '', namespace = '', permission = 1) => {
  const identification = id || uniqid()
  return (to) => item(identification, to(path), label, icon, exact, tooltip, namespace, permission)
}

/**
 * @type {Function}
 *
 * @param {string} uri
 * @param {Object} reference
 * @param {string} referenced
 */
export const pivot = (uri, reference, referenced) => ({uri, reference, referenced})

/**
 * @type {Function}
 *
 * @param {string} icon
 * @param {string} label
 * @param {string} path
 * @param {string} tooltip
 * @param {string} description
 * @param {int} width
 * @returns {Function}
 */
export const card = (icon, label, path, tooltip, description, width) => {
  return (to) => ({icon, label, to: to(path), tooltip, description, width})
}

/**
 * @type {Object}
 */
export default {
  grid, form, field, filter, meta, menu, pivot, card
}
