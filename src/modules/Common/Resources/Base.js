// import Quasar resources
import { Toast, Dialog, Loading } from 'quasar-framework'

// import lodash
import { isUndefined as __isUndefined, isFunction as __isFunction } from 'lodash'

/**
 * @param visibility
 * @param callback
 * @returns {*}
 */
export const load = (visibility, callback) => {
  if (__isUndefined(visibility)) {
    visibility = Loading.isActive()
  }
  if (__isFunction(callback)) {
    callback()
  }
  if (visibility) {
    return Loading.show({
      delay: 0
    })
  }
  return Loading.hide()
}

/**
 * @param message
 * @param undo
 * @param icon
 */
export const toast = (message, undo, icon) => {
  const action = {
    label: 'Desfazer',
    handler: () => {
      const promise = undo()
      if (promise && promise.then) {
        promise.then(() => {
          toast('Pronto, desfeito!', null, 'restore')
        })
      }
    },
    color: '#ffeb3b'
  }
  const button = __isFunction(undo) ? action : {}

  Toast.create({
    html: message,
    icon: icon || 'done',
    timeout: 1000,
    // color: '#f8c1c1',
    // bgColor: 'white',
    button
  })
}

/**
 * @param options
 */
export const dialog = (options) => {
  Dialog.create(options)
}

/**
 * @param title
 * @param message
 */
export const alert = (title, message) => {
  dialog({title, message})
}

/**
 * @param title
 * @param message
 * @param agree
 * @param disagree
 */
export const confirm = (title, message, agree, disagree) => {
  let buttons = [
    {
      label: 'Disagree',
      handler () {
        if (__isFunction(disagree)) {
          disagree()
        }
      }
    },
    {
      label: 'Agree',
      handler () {
        if (__isFunction(agree)) {
          agree()
        }
      }
    }
  ]

  this.dialog({
    title,
    message,
    buttons
  })
}
