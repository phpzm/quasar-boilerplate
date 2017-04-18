<template>
  <q-layout>
    <!-- Header -->
    <div slot="header" class="toolbar">
      <!-- opens left-side drawer using its ref -->
      <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        Title
      </q-toolbar-title>
      <!-- opens right-side drawer using its ref -->
      <button class="hide-on-drawer-visible" @click="$refs.rightDrawer.open()">
        <i>menu</i>
      </button>
    </div>

    <!-- Left-side Drawer -->
    <q-drawer ref="leftDrawer">
      <div class="toolbar">
        <q-toolbar-title>
          Drawer Title
        </q-toolbar-title>
      </div>
      <div class="list no-border platform-delimiter">
        <q-drawer-link icon="mail" :to="{path: '/', exact: true}">
          Link
        </q-drawer-link>
      </div>
    </q-drawer>
    <!-- IF USING subRoutes only: -->
    <router-view class="layout-view"></router-view>
    <!-- OR ELSE, IF NOT USING subRoutes: -->
    <div class="layout-view"></div>
    <!-- Right-side Drawer -->
    <q-drawer ref="rightDrawer">
      ...
    </q-drawer>
    <!-- Footer -->
    <div slot="footer" class="toolbar">
      ....
    </div>
  </q-layout>
</template>

<script type="text/javascript">
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
