export { default as store } from 'src/app/modules/dashboard/store'

/**
 * @param {string} label
 * @param {Array} items
 */
export { default as group } from './helper/group'

/**
 * @param {string} id
 * @param {string} label
 * @param {string} icon
 * @param {Array} children
 */
export { default as menu } from './helper/menu'

/**
 * @param {string} id
 * @param {Route} to
 * @param {string} label
 * @param {string} icon
 * @param {boolean} exact
 * @param {string} tooltip
 */
export { default as item } from './helper/item'
