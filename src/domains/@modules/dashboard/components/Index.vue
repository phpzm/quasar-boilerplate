<template>
  <layout-default v-bind="bind">
    <div slot="drawer-left-top">
      <div class="q-drawer-logo">
        <!--suppress HtmlUnknownTarget -->
        <img src="statics/logo/big.png" alt="logo">
      </div>
    </div>
  </layout-default>
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
        home: 'store',
        viewport: {
          height: 'calc(100vh - 100px)',
          padding: '0 10px'
        },
        shadow: true
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
