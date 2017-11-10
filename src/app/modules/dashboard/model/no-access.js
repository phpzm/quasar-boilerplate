import model from 'phpzm/support/model'

/**
 * @type {string}
 */
export const icon = 'lock_outline'

/**
 * @type {string}
 */
export const label = 'Acesso Restrito'

/**
 * @type {string}
 */
export const title = 'Você não tem acesso a esse recurso'

/**
 * @type {string}
 */
export const tooltip = 'O sistema identificou que você não tem acesso a esse recurso no momento'

/**
 * @type {string}
 */
export const path = '/dashboard/no-access'

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, title, tooltip)
