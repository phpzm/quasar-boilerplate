import axios from 'axios'
import { URL_API } from 'src/support/index'

const api = axios.create({
  baseURL: URL_API,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

/**
 * @param {string} token
 */
export const setToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

export default api
