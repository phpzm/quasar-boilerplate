<template>
  <q-drawer ref="drawer" right-side swipe-only>
    <div class="toolbar">
      <q-toolbar-title>
        Title
      </q-toolbar-title>
    </div>
    <div class="list no-border platform-delimiter">
      <q-drawer-link icon="mail" :to="{path: '/', exact: true}">
        Login
      </q-drawer-link>
    </div>
  </q-drawer>
</template>

<script type="text/javascript">
  import Drawer from 'src/modules/Common/Layout/Drawer'

  export default Drawer('app-drawer-left')
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
