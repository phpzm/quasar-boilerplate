import { uid } from 'quasar-framework'

/**
 * @param {Object} http
 */
export default http => {
  const _request = http.request
  http.request = function (config) {
    return _request(Object.assign({}, {requestId: uid()}, config))
  }

  const _get = http.get
  http.get = function (url, config) {
    return _get(url, Object.assign({}, {requestId: uid()}, config))
  }

  const _delete = http.delete
  http.delete = function (url, config) {
    return _delete(url, Object.assign({}, {requestId: uid()}, config))
  }

  const _head = http.head
  http.head = function (url, config) {
    return _head(url, Object.assign({}, {requestId: uid()}, config))
  }

  const _options = http.options
  http.options = function (url, config) {
    return _options(url, Object.assign({}, {requestId: uid()}, config))
  }

  const _post = http.post
  http.post = function (url, data, config) {
    return _post(url, data, Object.assign({}, {requestId: uid()}, config))
  }

  const _put = http.put
  http.put = function (url, data, config) {
    return _put(url, data, Object.assign({}, {requestId: uid()}, config))
  }

  const _patch = http.patch
  http.patch = function (url, data, config) {
    return _patch(url, data, Object.assign({}, {requestId: uid()}, config))
  }

  /**
   * @param {AxiosResponse} response
   * @returns {*}
   */
  http.$body = (response) => {
    if (!response.data) {
      return {}
    }
    if (typeof response.data.body !== 'object') {
      return {}
    }
    return response.data.body
  }

  /**
   * @param {AxiosResponse} response
   * @returns {*}
   */
  http.$meta = (response) => {
    if (!response.data) {
      return {}
    }
    if (typeof response.data.meta !== 'object') {
      return {}
    }
    return response.data.meta
  }

  /**
   * @param {AxiosResponse} response
   * @returns {*}
   */
  http.$first = (response) => {
    const content = http.$body(response)
    if (Array.isArray(content)) {
      return content.shift()
    }
    return {}
  }
}
