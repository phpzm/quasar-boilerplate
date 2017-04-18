<template>
  <q-drawer ref="drawer" :class="['sidebar']">
    <div class="toolbar sub-toolbar">
      <q-toolbar-title>
        <input type="text" placeholder="Search" class="field-search full-width">
      </q-toolbar-title>
    </div>
    <div class="list no-border platform-delimiter">
      <q-drawer-link icon="power_settings_new" :to="{path: '/', exact: true}">
        Logout
      </q-drawer-link>
    </div>
  </q-drawer>
</template>

<script type="text/javascript">
  import Drawer from 'src/modules/Common/Layout/Drawer'

  export default Drawer('app-drawer-left')
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sidebar
    .field-search
      color #fff
    .field-search::placeholder
      color #fff
  @media screen and (min-width: 921px)
    .sidebar.drawer:not(.active):not(.swipe-only)
      .drawer-content.left-side
        position fixed !important
        top 0
        z-index 11
        .toolbar
          box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
</style>
