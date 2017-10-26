// quasar wrappers
import {LocalStorage, SessionStorage} from 'quasar-framework'

/**
 * @param {string} index
 * @returns {*}
 */
export const get = (index) => {
  if (LocalStorage.get.item(index)) {
    return LocalStorage.get.item(index)
  }
  if (SessionStorage.get.item(index)) {
    return SessionStorage.get.item(index)
  }
}

/**
 * @param {string} index
 * @param {*} value
 * @param {boolean} keep
 * @returns {*}
 */
export const set = (index, value, keep = false) => {
  if (keep) {
    return LocalStorage.set(index, value)
  }
  return SessionStorage.set(index, value)
}
