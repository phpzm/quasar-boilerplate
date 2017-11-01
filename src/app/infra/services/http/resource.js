import http from 'src/app/infra/services/http/index'

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
 * @param {Object} extra - properties do be mapped
 * @return {Function}
 */
export const source = (api, value, label, extra = {}) => {
  /**
   * @param {Function} callback
   */
  return (callback) => {
    return read(api)('')
      .then((response) => {
        const data = response.data.data
        let source = []
        if (Array.isArray(data)) {
          source = data.map((item) => {
            const base = {
              value: item[value],
              label: item[label]
            }
            const others = Object.keys(extra).reduce((accumulate, key) => {
              if (item[extra[key]]) {
                accumulate[key] = item[extra[key]]
              }
              return accumulate
            }, {})
            return Object.assign({}, base, others)
          })
        }
        callback(source)
      })
  }
}

/**
 * @param path
 * @returns {Resource}
 */
export const resource = path => {
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
