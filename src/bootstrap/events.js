/**
 * @param {Store<any>} store
 * @param {Object} i18n
 */
export const beforeUnload = (store, i18n) => {
  return event => {
    if (store.getters.AppModified) {
      const returnValue = i18n.t('events.modified.message')
      event.returnValue = returnValue
      return returnValue
    }
  }
}
