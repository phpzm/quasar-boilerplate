import { APP_DEV } from 'src/app/support/index'

export default {
  data: () => ({
    buttons: {
      top: [],
      middle: [],
      bottom: [],
      floating: []
    },
    timeout: 1000,
    char: '~'
  }),
  computed: {
    debugging () {
      return this.debug && APP_DEV
    }
  }
}
