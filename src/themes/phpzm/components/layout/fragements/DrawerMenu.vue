<template>
  <div class="drawer-menu">
    <template v-for="menu in menus">
      <app-drawer-menu-item v-bind="{menu, badges}"></app-drawer-menu-item>
    </template>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import AppDrawerMenuItem from 'src/themes/phpzm/components/layout/fragements/DrawerMenuItem.vue'

  export default {
    components: {
      AppDrawerMenuItem
    },
    name: 'app-drawer-menu',
    props: {
      menus: {
        required: true,
        type: Array
      }
    },
    computed: {
      badges () {
        return this.getDashboardBadges.reduce((accumulate, item) => {
          if (item.id) {
            accumulate[item.id] = item.count
          }
          return accumulate
        }, {})
      },
      ...mapGetters(['getDashboardBadges'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .drawer-menu
    border-width 0 0 1px 0
    border-color #ddd
    border-style solid
</style>
