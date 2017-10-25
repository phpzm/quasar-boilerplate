import { APP_USER, APP_TOKEN } from 'src/support/index'
import { set } from 'src/infra/storage'
import { setToken } from 'src/infra/services/http/index'

/**
 * Vuex actions
 */
import * as types from 'src/infra/store/types'

/**
 * @param context
 * @param {string} payload
 */
export const changeTitle = (context, payload) => {
  context.commit(types.setAppTitle, payload)
}

/**
 * @param context
 * @param {Array} payload
 */
export const changeMenu = (context, payload) => {
  context.commit(types.setAppMenu, payload)
}

/**
 * @param context
 * @param {Object} payload
 */
export const changeUser = (context, payload) => {
  context.commit(types.setAppUser, payload)
  if (!payload) {
    return set(APP_USER, payload)
  }
  // noinspection JSUnresolvedVariable
  set(APP_USER, payload, payload.remember)
}

/**
 * @param context
 * @param {Object} payload
 */
export const changeToken = (context, payload) => {
  context.commit(types.setAppToken, payload)
  setToken(payload)
  set(APP_TOKEN, payload)
}
