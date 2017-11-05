import { APP_DEV } from 'src/app/support/index'

export default {
  computed: {
    debugging () {
      if (!APP_DEV) {
        return false
      }
      return this.debug
    }
  }
}
