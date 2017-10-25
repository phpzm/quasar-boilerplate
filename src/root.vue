<template>
  <!-- Don't drop "q-app" class -->
  <div>
    <q-ajax-bar :size="'2px'" :color="'teal-10'" :delay="50"></q-ajax-bar>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters, mapActions } from 'vuex'
  import { dom } from 'quasar-framework'

  export default {
    name: 'root',
    computed: {
      ...mapGetters(['AppTitle'])
    },
    methods: {
      ...mapActions(['setAppWidth', 'setAppHeight']),
      resize () {
        let {width, height} = dom.viewport()
        this.setAppWidth(width)
        this.setAppHeight(height)
      }
    },
    watch: {
      /**
       * @param {String} title
       */
      AppTitle (title) {
        document.title = title
      }
    },
    created () {
      // noinspection JSValidateTypes
      document.title = this.AppTitle
    },
    mounted () {
      this.resize()
      window.addEventListener('resize', this.resize)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.resize)
    }
  }
</script>
