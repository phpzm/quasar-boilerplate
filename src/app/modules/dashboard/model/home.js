import model from 'phpzm/support/model'

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
export const meta = Object.assign({}, model.meta(icon, label, title, tooltip), {noBreadcrumb: true})

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, true, tooltip, 'home')
