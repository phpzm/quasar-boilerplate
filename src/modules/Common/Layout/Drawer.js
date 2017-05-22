// drawer
import {mapGetters} from 'vuex'

export default (side) => {
  return {
    name: 'app-drawer-' + side,
    props: {
      swipe: {
        type: Boolean,
        default: false
      },
      flat: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({}),
    computed: {
      ...mapGetters(['AppMenuLeft']),
      classNames () {
        const classNames = []
        if (this.flat) {
          classNames.push('flat')
        }
        return classNames
      }
    },
    methods: {
      open () {
        this.$refs.drawer.open()
      }
    },
    created () {
    },
    mounted () {
    }
  }
}
