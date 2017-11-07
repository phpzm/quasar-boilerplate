/**
 * @param {AxiosRequestConfig} config
 * @returns {AxiosRequestConfig}
 */
export const httpRequest = (config) => {
  return config
}

/**
 * @param {AxiosResponse} response
 * @returns {AxiosResponse}
 */
export const httpResponse = (response) => {
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
