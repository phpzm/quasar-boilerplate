import model from 'src/app/support/model'

/**
 * @type {string}
 */
export const icon = 'store'

/**
 * @type {string}
 */
export const label = 'Página Inicial'

/**
 * @type {string}
 */
export const tooltip = 'Fique atento a sua vida financeira e seus compromissos'

/**
 * @type {string}
 */
export const path = '/dashboard'

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, tooltip)

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, true, tooltip, 'home')
