import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getAuthUser'])
  },
  methods: {
    /**
     * @param {Object} action
     * @param {Object} record
     */
    permission (action, record) {
      if (typeof action.permission !== 'function') {
        return true
      }
      return action.permission(record, this, this.getAuthUser)
    }
  }
}
