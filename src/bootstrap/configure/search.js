/**
 * @param {int} page
 * @param {int} limit
 * @param {Object} filters
 * @returns {Object}
 */
export default (page, limit, filters) => {
  let pagination = {}
  if (page) {
    pagination = {page: page}
  }

  let limiting = {}
  if (limit) {
    limiting = {limit: limit}
  }

  return Object.assign({}, filters, limiting, pagination)
}
