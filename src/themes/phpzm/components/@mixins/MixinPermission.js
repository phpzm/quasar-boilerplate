import { get } from 'lodash'
import { mapGetters } from 'vuex'
import permission from 'src/bootstrap/configure/permission'

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
      const $route = get(this, '$route')
      if (!$route) {
        return false
      }
      if (typeof action.permission === 'function') {
        return action.permission(record, this, this.getAuthUser)
      }
      const access = permission(this.getAuthUser, $route, action)
      if (!access) {
        return false
      }
      if (typeof action.access === 'function') {
        return action.access(record, this, this.getAuthUser)
      }
      return true
    }
  }
}
