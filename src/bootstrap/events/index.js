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

/**
 * @param {Object} error
 * @param {Vue} component
 * @param {string} context
 */
export const errorHandler = (error, component, context) => {
  console.warn('[context] ~> ', context)
  console.warn('[component] ~> ', component.$options.name)
  console.error('[error] ~> ', error.message)
}
