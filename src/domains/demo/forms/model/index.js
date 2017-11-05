import model from 'src/app/support/model'

/**
 * @type {string}
 */
export const icon = 'subtitles'

/**
 * @type {string}
 */
export const label = 'Formulários'

/**
 * @type {string}
 */
export const title = 'Formulários de Exemplo'

/**
 * @type {string}
 */
export const api = '/forms'

/**
 * @type {string}
 */
export const path = '/dashboard/forms'

/**
 * @type {string}
 */
export const tooltip = 'Pequeno resumo dos campos pré-configurados que podem ser usados nos formulários'

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, title, tooltip)

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, true, tooltip, 'forms')
