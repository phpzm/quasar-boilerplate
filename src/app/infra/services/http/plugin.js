import http from 'src/app/infra/services/http/index'
import { loading } from 'src/app/support/message/index'
import { PATH_LOGIN } from 'src/app/support/index'
import { httpRequest, httpResponse, httpError } from 'src/bootstrap/settings'

/**
 * @param http
 * @param store
 * @param router
 */
export const interceptors = (http, store, router) => {
  /**
   * @param config
   * @returns {*}
   */
  const request = config => {
    // noinspection JSUnresolvedVariable
    if (!config.noLoading) {
      loading(true, 1000)
    }
    return httpRequest(config)
  }
  http.interceptors.request.use(request)

  /**
   * @param response
   * @returns {*}
   */
  const response = response => {
    loading(false)
    // noinspection JSUnresolvedVariable
    if (response.headers && response.headers.authorization) {
      // noinspection JSUnresolvedVariable
      store.dispatch('setAuthToken', response.headers.authorization)
    }
    return httpResponse(response)
  }

  /**
   * @param error
   * @returns {Promise<any> | Promise.<*>}
   */
  const error = error => {
    loading(false)
    const {response} = error
    if (response && [401, 400].indexOf(response.status) > -1) {
      router.push(PATH_LOGIN)
    }
    return Promise.reject(httpError(error, router, store))
  }

  http.interceptors.response.use(response, error)
}

/**
 * @param Vue
 * @param store
 * @param router
 * @returns {AxiosInstance}
 */
export default function install (Vue, {store, router}) {
  interceptors(http, store, router)
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })
}
