<template>
  <layout-default v-bind="bind"></layout-default>
</template>

<script type="text/javascript">
  import LayoutDefault from 'src/themes/phpzm/components/layout/AppLayout.vue'
  import configureDashboard from 'src/bootstrap/configure/dashboard'

  export default {
    name: 'dashboard',
    components: {
      LayoutDefault
    },
    data: () => ({
      bind: {
        view: 'lHh Lpr lFf',
        reveal: true,
        leftBreakpoint: 996,
        viewport: {
          height: 'calc(100vh - 100px)',
          padding: '0 10px'
        }
      }
    }),
    created () {
      // noinspection JSCheckFunctionSignatures
      configureDashboard(this)
    }
  }
</script>

<style lang="stylus">
</style>
