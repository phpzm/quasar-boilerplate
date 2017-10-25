/**
 * @param array
 * @param property
 * @return {Array}
 */
export const parseOrder = (array, property) => {
  if (!Array.isArray(array)) {
    return []
  }
  if (!property) {
    property = 'order'
  }
  let order = 1
  return array
    .map(_item => {
      _item[property] = order++
      return _item
    })
}

/**
 * @param value
 * @param precision
 * @return {string}
 */
export const money = (value, precision = 2) => {
  if (typeof value === 'undefined') {
    value = 0
  }
  value = Number(value).toFixed(precision)

  value = String(value)
    .replace(/\D/g, '')
    .replace(/(\d)(\d{11})$/, '$1.$2')
    .replace(/(\d)(\d{8})$/, '$1.$2')
    .replace(/(\d)(\d{5})$/, '$1.$2')

  return value.replace(/(\d)(\d{2})$/, '$1,$2')
}

/**
 * @param {Object} data
 * @param {Array} remove
 */
export const clone = (data, remove = []) => {
  const clone = JSON.parse(JSON.stringify(data))

  const $clear = (object) => {
    if (typeof object === 'object') {
      Object.keys(object).forEach(property => {
        if (remove.includes(property)) {
          return delete object[property]
        }
        if (Array.isArray(object[property])) {
          object[property].forEach((item, index) => {
            object[property][index] = $clear(item, remove)
          })
        }
      })
    }
    return object
  }

  return $clear(clone, remove)
}
