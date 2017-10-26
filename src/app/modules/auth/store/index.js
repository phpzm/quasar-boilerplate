import { login } from 'src/bootstrap/events'

export default {
  actions: {
    /**
     * @param context
     * @param payload
     */
    login: (context, payload) => {
      context.dispatch('changeUser', login(payload.user))
      context.dispatch('changeToken', payload.token)
    },
    /**
     * @param context
     */
    logout: (context) => {
      context.dispatch('changeUser', undefined)
      context.dispatch('changeToken', undefined)
    }
  }
}
