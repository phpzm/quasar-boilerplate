/**
 * @param {Array} array
 * @param {String} property
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
 * @param {String} pattern
 * @param {*} value
 * @return {String}
 */
export const mask = (pattern, value) => {
  let masked = ''
  value = unMask(pattern, value)
  if (!value) {
    return ''
  }
  let j = 0
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '*') {
      masked += '*'
      continue
    }
    if (j > value.length - 1) {
      return masked
    }
    if (pattern[i] === '#') {
      masked += value[j]
      j++
      continue
    }
    masked += pattern[i]
  }
  return masked
}

/**
 * @param {string} pattern
 * @param {string} value
 * @return {string}
 */
export const unMask = (pattern, value) => {
  const chars = noDuplicates(String(pattern).replace(/[#,*]/g, '').split(''))
  return String(value).replace(new RegExp('[' + chars.join(',') + ']', 'g'), '')
}

/**
 * @param {Array} array
 * @return {Array}
 */
export const noDuplicates = (array) => {
  const a = array.concat()
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) {
        a.splice(j--, 1)
      }
    }
  }
  return a
}

/**
 * @param {string} value
 * @param {int} length
 * @param {string} char
 * @returns {string}
 */
export const padLeft = (value, length, char = '0') => {
  const string = String(value)
  const pad = Array.from({length: length}, () => char).join('')
  return pad.substring(0, pad.length - string.length) + string
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
 * @param {*} element
 * @returns {*}
 */
export const clone = (element) => {
  // Handle the 3 simple types, and null or undefined
  if (element === null || element === undefined || typeof element !== 'object') {
    return element
  }

  // Handle Date
  if (element instanceof Date) {
    const date = new Date()
    date.setTime(element.getTime())
    return date
  }

  // Handle Array
  if (element instanceof Array) {
    return element.map(clone)
  }

  // Handle Object
  if (element instanceof Object) {
    return Object.keys(element).reduce((accumulate, property) => {
      accumulate[property] = clone(element[property])
      return accumulate
    }, {})
  }

  throw new Error('Unable to copy element! Its type isn\'t supported.')
}

/**
 * @param {Function} executor
 */
export const promise = executor => new Promise(executor)
