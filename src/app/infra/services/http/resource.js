import http from 'src/app/infra/services/http/index'
import { $body } from 'src/bootstrap/configure/http'

/**
 * @param {object} object
 * @param {string} prefix
 * @returns {string}
 */
export const serialize = (object, prefix) => {
  const string = []
  for (let property in object) {
    if (!object.hasOwnProperty(property)) {
      continue
    }
    let key = prefix ? prefix + '[' + property + ']' : property
    let value = object[property]
    let serialized = ''
    if (value && typeof value === 'object') {
      serialized = serialize(value, key)
    }
    else {
      serialized = encodeURIComponent(key) + '=' + encodeURIComponent(value)
    }
    string.push(serialized)
  }
  return string.join('&')
}

/**
 * @param {string} base
 * @param {string} uri
 * @param {object} parameters
 * @returns {string}
 */
export const url = (base, uri, parameters) => {
  return base + (uri ? '/' + uri : '') + (parameters ? '?' + serialize(parameters) : '')
}

/**
 * @param {string} path
 * @returns {Function}
 */
export const create = (path) => {
  /**
   * @param {object} data
   * @param {string} uri
   * @param {object} parameters
   */
  return (data, uri, parameters) => {
    return http.post(url(path, uri, parameters), data)
  }
}

/**
 * @param {string} path
 * @returns {Function}
 */
export const read = (path) => {
  /**
   * @param {string} uri
   * @param {object} parameters
   */
  return (uri, parameters) => {
    return http.get(url(path, uri, parameters))
  }
}

/**
 * @param {string} path
 * @returns {Function}
 */
export const update = (path) => {
  /**
   * @param {string} id
   * @param {object} data
   * @param {object} parameters
   */
  return (id, data, parameters) => {
    return http.put(url(path, id, parameters), data)
  }
}

/**
 * @param {string} path
 * @returns {Function}
 */
export const destroy = (path) => {
  /**
   * @param {object} path
   * @param {string} id
   * @param {object} parameters
   */
  return (id, parameters) => {
    return http.delete(url(path, id, parameters))
  }
}

/**
 * @param {string} api - endpoint of api
 * @param {string} value - property what is the value in options
 * @param {string} label - property what is the label in options
 * @param {Object} more - properties do be mapped
 * @return {Function}
 */
export const source = (api, value, label, more = {}) => {
  const map = (item) => {
    const reduce = (accumulate, key) => {
      if (item[more[key]]) {
        accumulate[key] = item[more[key]]
      }
      return accumulate
    }
    const others = Object.keys(more).reduce(reduce, {})
    const base = {
      value: item[value],
      label: item[label]
    }
    return Object.assign({}, base, others)
  }
  const success = (response, callback) => {
    const data = $body(response)
    let source = []
    if (Array.isArray(data)) {
      source = data.map(map)
    }
    callback(source)
  }
  /**
   * @param {Function} callback
   */
  return (callback) => read(api)('').then(response => success(response, callback))
}

/**
 * @param path
 * @returns {Resource}
 */
export const resource = (path) => {
  return new Resource(path)
}

/**
 */
class Resource {
  constructor (path) {
    this.post = create(path)
    this.get = read(path)
    this.put = update(path)
    this.patch = update(path)
    this.delete = destroy(path)
  }
}
