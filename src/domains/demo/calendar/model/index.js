import model from 'src/app/support/model'

/**
 * @type {string}
 */
export const icon = 'today'

/**
 * @type {string}
 */
export const label = 'Agenda'

/**
 * @type {string}
 */
export const tooltip = 'Controle seus compromissos e nunca mais perca a hora para aquela reunião'

/**
 * @type {string}
 */
export const api = '/calendar'

/**
 * @type {string}
 */
export const path = '/dashboard/calendar'

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, tooltip)

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, true, tooltip, 'calendar')
