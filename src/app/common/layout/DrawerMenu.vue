<template>
  <div class="drawer-menu">
    <template v-for="menu in menus">
      <drawer-menu-item :menu="menu"></drawer-menu-item>
    </template>
  </div>
</template>

<script type="text/javascript">
  import DrawerMenuItem from 'src/app/common/layout/DrawerMenuItem.vue'

  export default {
    components: {
      DrawerMenuItem
    },
    name: 'drawer-menu',
    props: {
      menus: {
        required: true,
        type: Array
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
