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
export const title = 'Página Inicial do app'

/**
 * @type {string}
 */
export const tooltip = 'Breve explicação sobre o projeto'

/**
 * @type {string}
 */
export const path = '/dashboard'

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, title, tooltip)

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, true, tooltip, 'home')
