// quasar wrappers
import {LocalStorage, SessionStorage} from 'quasar-framework'

const parse = value => value === 'undefined' ? undefined : value

const isValid = value => value !== 'undefined' && value !== undefined && value !== null

/**
 * @param {string} index
 * @param {*} keep
 * @returns {*}
 */
export const get = (index, keep = null) => {
  if (keep === true) {
    return parse(LocalStorage.get.item(index))
  }
  if (keep === false) {
    return parse(LocalStorage.get.item(index))
  }
  const local = LocalStorage.get.item(index)
  if (isValid(local)) {
    return local
  }
  const session = SessionStorage.get.item(index)
  if (isValid(session)) {
    return session
  }
}

/**
 * @param {string} index
 * @param {*} value
 * @param {boolean} keep
 * @returns {*}
 */
export const set = (index, value, keep = false) => {
  if (value === undefined) {
    if (keep) {
      return LocalStorage.remove(index)
    }
    return SessionStorage.remove(index)
  }
  if (keep) {
    return LocalStorage.set(index, value)
  }
  return SessionStorage.set(index, value)
}
