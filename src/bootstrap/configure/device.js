import { get as __get } from 'lodash'
import { uid, LocalStorage } from 'quasar-framework'

/**
 * @param {string} alias
 * @returns {string}
 */
export default (alias) => {
  const appVersion = __get(window, 'navigator.appVersion', 'unknown')
  let device = LocalStorage.get.item(alias)
  if (!device) {
    const appId = uid()
    device = `[${appId}] ${appVersion}`
    LocalStorage.set(alias, device)
  }
  return device
}
