/**
 * Vuex actions
 */
import * as types from 'src/app/infra/store/types'

/**
 * @param context
 * @param {string} title
 */
export const setAppTitle = (context, title) => {
  context.commit(types.setAppTitle, title)
}

/**
 * @param context
 * @param {string} tooltip
 */
export const setAppTooltip = (context, tooltip) => {
  context.commit(types.setAppTooltip, tooltip)
}

/**
 * @param context
 * @param {Object} width
 */
export const setAppWidth = (context, width) => {
  context.commit(types.setAppWidth, width)
}

/**
 * @param context
 * @param {Object} height
 */
export const setAppHeight = (context, height) => {
  context.commit(types.setAppHeight, height)
}

/**
 * @param context
 * @param {Object} modified
 */
export const setAppModified = (context, modified) => {
  context.commit(types.setAppModified, modified)
}

/**
 * @param context
 * @param {Array} menu
 */
export const setAppMenu = (context, menu) => {
  context.commit(types.setAppMenu, menu)
}

/**
 * @param context
 * @param messages
 */
export const setAppMessages = (context, messages) => {
  context.commit(types.setAppMessages, messages)
}
