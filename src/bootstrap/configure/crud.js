export const crud = 'app/components/crud'

/**
 * @param {string} component
 * @param {string} path
 * @returns {string}
 */
export default (component, path = '') => {
  if (!path) {
    path = crud
  }
  return `${path}/${component}`
}
