import { __CRUD__ } from 'phpzm/index'

/**
 * @param {string} component
 * @param {string} path
 * @returns {string}
 */
export default (component, path = '') => {
  if (!path) {
    path = __CRUD__
  }
  return `${path}/${component}`
}
