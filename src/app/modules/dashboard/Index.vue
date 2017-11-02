<template>
  <layout-default
    :view="view"
    :left-breakpoint="leftBreakpoint"
    :reveal="reveal"></layout-default>
</template>

<script type="text/javascript">
  import LayoutDefault from 'src/themes/phpzm/components/layout/AppLayout.vue'
  import { configureDashboard } from 'src/bootstrap/settings'

  export default {
    name: 'dashboard',
    components: {
      LayoutDefault
    },
    props: {
      view: {
        default: 'lHh Lpr lFf' // default: 'lHh Lpr fff'
      },
      reveal: {
        default: false
      },
      leftBreakpoint: {
        default: 996
      }
    },
    created () {
      // noinspection JSCheckFunctionSignatures
      configureDashboard(this)
    }
  }
</script>

<style lang="stylus">
</style>
