export default {
  actions: {
    /**
     * @param context
     * @param payload
     */
    login: (context, payload) => {
      context.dispatch('changeUser', payload.user)
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
