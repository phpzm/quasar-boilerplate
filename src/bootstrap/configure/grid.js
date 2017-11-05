/**
 * @param {Resource} service
 * @param {string} path
 * @param {string} id
 * @param {Array} schemas
 * @param {Array} filters
 * @param {Array|Function} actions
 * @param {Object} options
 * @returns {Object}
 */
export default (service, path, id, schemas, filters, actions = null, options = {}) => {
  const base = {
    scope: 'index',
    timeout: 200
  }
  const settings = {service, path, id, schemas, filters, actions}

  return Object.assign({}, base, settings, options)
}
