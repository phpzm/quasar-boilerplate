import { Dialog, Loading, Toast } from 'quasar-framework'

/**
 * @param {String} title
 * @param {String} message
 * @param {Array} [actions]
 */
export const alert = (title, message, actions) => {
  const buttons = [
    'Ok'
  ]

  Dialog.create({
    title: title,
    message: message,
    buttons: actions || buttons
  })
}

/**
 * @param {String} title
 * @param {String} message
 * @param {Function} ok
 * @param {Function} cancel
 */
export const confirm = (title, message, ok, cancel = null) => {
  const buttons = [
    {
      label: 'Cancelar',
      handler () {
        if (cancel) {
          cancel()
        }
      }
    },
    {
      label: 'Ok',
      handler: ok
    }
  ]

  Dialog.create({
    title: title,
    message: message,
    buttons: buttons
  })
}

/**
 * @param {Boolean} status
 * @param {String} message
 * @param {Number} delay
 */
export const loading = (status = true, delay = 0, message = '') => {
  if (status) {
    return Loading.show({
      message,
      delay
    })
  }
  return Loading.hide()
}

/**
 * @param {String} html
 * @param {String} icon
 * @param {Number} timeout
 * @param {String} color
 * @param {String} bgColor
 */
export const toast = (html, icon = 'done', timeout = 6000, color = '#ffffff', bgColor = '#000000') => {
  Toast.create({
    html, icon, timeout, color, bgColor
  })
}

/**
 * @param {String} html
 * @param {Function} action
 * @param {String} icon
 * @param {Number} timeout
 * @param {String} color
 * @param {String} bgColor
 */
export const undo = (html, action, icon = 'warning', timeout = 6000, color = '#ffffff', bgColor = '#000000') => {
  const button = {
    label: 'Repetir',
    handler () {
      action()
    },
    color: '#ffffff'
  }
  Toast.create({
    html, button, icon, timeout, color, bgColor
  })
}
