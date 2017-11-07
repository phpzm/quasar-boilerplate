<template>
  <div class="app-drawer-menu">
    <template v-for="menu in menus">
      <app-drawer-menu-item v-bind="{menu, badges, withShadow}"></app-drawer-menu-item>
    </template>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import AppDrawerMenuItem from 'src/themes/phpzm/components/layout/drawer/DrawerMenuItem.vue'

  export default {
    components: {
      AppDrawerMenuItem
    },
    name: 'app-drawer-menu',
    props: {
      menus: {
        required: true,
        type: Array
      },
      withShadow: {
        type: Boolean,
        default: () => true
      }
    },
    computed: {
      /**
       */
      badges () {
        return this.getDashboardBadges.reduce(this.reduce, {})
      },
      ...mapGetters(['getDashboardBadges'])
    },
    methods: {
      /**
       * @param {Object} accumulate
       * @param {Object} item
       * @return {Object}
       */
      reduce (accumulate, item) {
        if (item.value) {
          accumulate[item.value] = item.label
        }
        return accumulate
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .app-drawer-menu
    color $app-drawer-menu-color
</style>
