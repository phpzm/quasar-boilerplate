<template>
  <div class="drawer-menu">
    <template v-for="menu in menus">
      <drawer-menu-item :menu="menu"></drawer-menu-item>
    </template>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import DrawerMenuItem from 'src/app/modules/common/layout/DrawerMenuItem.vue'

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
    },
    computed: {
      badges () {
        return this.getBadges.reduce((accumulate, item) => {
          if (item.id) {
            accumulate[item.id] = item.count
          }
          return accumulate
        }, {})
      },
      ...mapGetters(['getBadges'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .drawer-menu
    border-width 0 0 1px 0
    border-color #ddd
    border-style solid
</style>
