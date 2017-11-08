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
    timeout: 200,
    top: false,
    bottom: true,
    styles: {
      height: 'calc(100vh - 235px)',
      minHeight: '250px'
    },
    bodyStyle: {
      height: 'calc(100vh - 285px)',
      minHeight: '200px'
    },
    debug: false
  }
  const settings = {service, path, id, schemas, filters, actions}

  return Object.assign({}, base, settings, options)
}
