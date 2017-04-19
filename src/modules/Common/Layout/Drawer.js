// drawer
import {mapGetters} from 'vuex'

export default (side) => {
  return {
    name: 'app-drawer-' + side,
    props: {},
    data: () => ({}),
    computed: {
      ...mapGetters(['AppMenuLeft'])
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
