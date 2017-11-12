import { View } from 'genesis'
/**
 * @param {Store<any>} store
 */
export const beforeUnload = (store) => {
  return event => {
    // noinspection JSUnresolvedVariable
    if (store.getters.AppModified) {
      const returnValue = View.get('locales.events.modified.message')
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
  console.warn('[component] ~> ', component ? component.$options.name : component)
  console.error('[error] ~> ', error.message)
}
