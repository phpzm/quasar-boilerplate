<template>
  <app-layout v-bind="bind">
    <div slot="drawer-left-top">
      <div class="q-drawer-logo">
        <!--suppress HtmlUnknownTarget -->
        <img src="statics/logo/big.png" alt="logo">
      </div>
    </div>
  </app-layout>
</template>

<script type="text/javascript">
  import AppLayout from 'src/themes/phpzm/components/layout/AppLayout.vue'
  import configureDashboard from 'src/bootstrap/configure/dashboard'

  export default {
    name: 'dashboard-index',
    components: {
      AppLayout
    },
    data: () => ({
      bind: {
        view: 'HHh Lpr lFf',
        reveal: true,
        leftBreakpoint: 996, // min width to show drawer
        home: 'store', // breadcrumb home icon
        viewport: { // viewport to middle of dashboard
          height: 'calc(100vh - 100px)',
          padding: '10px'
        },
        mobile: { // viewport to middle of dashboard in mobile
          height: 'calc(100vh - 100px)',
          padding: '5px'
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
