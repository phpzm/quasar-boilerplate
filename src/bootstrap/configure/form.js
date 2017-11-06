/**
 * @param {Resource} service
 * @param {string} scope
 * @param {string} path
 * @param {string} id
 * @param {Array} schemas
 * @param {Array} actions
 * @param {Object} options
 * @returns {Object}
 */
export default (service, scope, path, id, schemas, actions = null, options = {}) => {
  const base = {}

  const settings = {service, scope, path, id, schemas, actions}

  return Object.assign({}, base, settings, options)
}
