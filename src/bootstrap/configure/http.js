import { serialize } from 'genesis/infra/services/http/resource'
const ttl = 60000 // one minute

/**
 * @param {AxiosRequestConfig} request
 * @param {Cache} cache
 * @returns {AxiosRequestConfig}
 */
export const httpRequest = (request, cache) => {
  // Only cache GET requests
  if (request.method !== 'get') {
    return request
  }

  if (request.noCache) {
    return request
  }

  let url = request.baseURL + request.url
  if (request.params) {
    url += '?' + serialize(request.params)
  }

  const data = cache.get(url)
  if (!data) {
    return request
  }

  data.__fromCache = true
  request.data = data

  request.adapter = () => {
    return Promise.resolve({
      data: data,
      status: request.status,
      statusText: request.statusText,
      headers: request.headers,
      config: request,
      request: request
    })
  }
  return request
}

/**
 * @param {AxiosResponse} response
 * @param {Cache} cache
 * @returns {AxiosResponse}
 */
export const httpResponse = (response, cache) => {
  // Only cache GET responses
  if (response.config.method !== 'get') {
    return response
  }

  if (response.config.noCache) {
    return response
  }

  let url = response.config.url
  if (response.config.params) {
    url += '?' + serialize(response.config.params)
  }

  cache.set(url, response.data, ttl)

  return response
}

/**
 * @param {AxiosError} error
 * @param {AppRouter} router
 * @param {AppStore} store
 * @returns {AxiosError}
 */
export const httpError = (error, router, store) => {
  return error
}

/**
 * @param {AxiosResponse} response
 * @param {string} property
 * @param {*} fallback
 * @returns {*}
 */
export const $extract = (response, property, fallback = {}) => {
  if (!response.data) {
    return {}
  }
  if (typeof response.data.body !== 'object') {
    return fallback
  }
  if (!response.data.hasOwnProperty(property)) {
    return fallback
  }
  return response.data[property]
}

/**
 * @param {AxiosResponse} response
 * @param {*} fallback
 * @returns {*}
 */
export const $body = (response, fallback = {}) => {
  return $extract(response, 'body', fallback)
}

/**
 * @param {AxiosResponse} response
 * @param {*} fallback
 * @returns {*}
 */
export const $meta = (response, fallback = {}) => {
  return $extract(response, 'meta', fallback)
}

/**
 * @param {AxiosResponse} response
 * @returns {*}
 */
export const $first = (response) => {
  const content = $body(response)
  if (Array.isArray(content)) {
    return content.shift()
  }
  return {}
}
