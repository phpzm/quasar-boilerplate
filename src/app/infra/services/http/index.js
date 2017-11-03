import axios from 'axios'
import canceler from 'axios-cancel'
import configure from 'src/app/infra/services/http/configure'
import { URL_API } from 'src/app/support/index'
import { loading } from 'src/app/support/message/index'
import configureToken from 'src/bootstrap/configure/token'

const http = axios.create({
  baseURL: URL_API,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

configure(http)

canceler(http, {
  debug: false // process.env.DEV
})

/**
 * @param {string} token
 */
export const setToken = token => {
  http.defaults.headers.common.Authorization = configureToken(token)
}

/**
 * @param {string} reason
 */
export const abort = reason => {
  http.cancelAll(reason)
  loading(false)
}

/**
 * @param {string} requestId
 */
export const cancel = (requestId) => {
  http.cancel(requestId)
  loading(false)
}

export default http
