export { default as MixinData } from 'src/themes/phpzm/components/crud/model/general/MixinData'
export { default as MixinMethods } from 'src/themes/phpzm/components/crud/model/general/MixinMethods'
export { default as MixinProps } from 'src/themes/phpzm/components/crud/model/general/MixinProps'

import configureButtons from 'src/bootstrap/configure/buttons'

/**
 * @param {Vue} $this
 * @param {*} actions
 * @returns {Array}
 */
export const actions = ($this, actions) => {
  if (Array.isArray(actions)) {
    return actions
  }
  if (typeof actions === 'function') {
    return actions($this, configureButtons($this))
  }
  return configureButtons($this)
}
