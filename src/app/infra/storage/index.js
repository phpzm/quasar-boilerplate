// quasar wrappers
import {LocalStorage, SessionStorage} from 'quasar-framework'

/**
 * @param {string} index
 * @param {boolean} keep
 * @returns {*}
 */
export const get = (index, keep = undefined) => {
  if (keep === undefined) {
    if (LocalStorage.get.item(index) !== 'undefined') {
      return LocalStorage.get.item(index)
    }
    if (SessionStorage.get.item(index) !== 'undefined') {
      return SessionStorage.get.item(index)
    }
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
