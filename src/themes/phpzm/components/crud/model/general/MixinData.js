import { APP_DEV } from 'src/app/support/index'

export default {
  data: () => ({
    buttons: {
      top: [],
      middle: [],
      bottom: [],
      floating: []
    },
    timeout: 100,
    char: '~'
  }),
  computed: {
    debugging () {
      return this.debug && APP_DEV
    }
  }
}
