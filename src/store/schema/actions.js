import * as types from 'src/store/types'

/**
 * @param context
 * @param payload
 */
export const setAppMenuLeft = (context, payload) => {
  context.commit(types.setAppMenuLeft, payload)
}
