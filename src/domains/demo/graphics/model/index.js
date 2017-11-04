import model from 'src/app/support/model'

export const icon = 'pie_chart'

/**
 * @type {string}
 */
export const label = 'Gráficos'

/**
 * @type {string}
 */
export const api = '/graphics'

/**
 * @type {string}
 */
export const path = '/dashboard/graphics'

/**
 * @type {string}
 */
export const tooltip = 'Exemplos básicos de gráficos'

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, tooltip)

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, true, tooltip, 'graphics')
