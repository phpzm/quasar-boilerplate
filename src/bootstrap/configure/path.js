/**
 * @param {string} path
 * @param {Object} query
 * @returns {{path: *, query: {}}}
 */
export default (path, query = {}) => {
  return {
    path: path,
    query: query
  }
}
