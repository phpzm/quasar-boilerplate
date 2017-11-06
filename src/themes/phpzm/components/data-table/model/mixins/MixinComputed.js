import { mapGetters } from 'vuex'

export default {
  computed: {
    direction () {
      return this.position === 'left' ? 'right' : 'left'
    },
    ...mapGetters(['getAuthUser'])
  }
}
