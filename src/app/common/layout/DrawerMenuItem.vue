<template>
  <div class="drawer-menu-item">
    <q-collapsible ref="collapsible" v-if="hasChildren" :icon="menu.icon" :label="menu.label" :class="classNames">
      <template v-for="child in menu.children">
        <drawer-menu-item :menu="child"></drawer-menu-item>
      </template>
    </q-collapsible>

    <q-side-link v-else :to="menu.to" :exact="menu.exact" item>
      <q-item-side v-if="menu.left" v-bind="menu.left"></q-item-side>
      <q-item-main :label="menu.label" :sublabel="menu.sublabel"></q-item-main>
      <q-item-side v-if="menu.right" v-bind="menu.right" right></q-item-side>
    </q-side-link> <q-chip v-if="badges[menu.id]" floating color="red">22</q-chip>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'drawer-menu-item',
    props: {
      menu: {
        required: true,
        type: Object
      },
      badges: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      hasChildren () {
        return this.menu.children && this.menu.children.length > 0
      },
      classNames () {
        return ['q-collapsible-drawer']
      }
    },
    methods: {
      filterChildren (child) {
        if (child.children) {
          return child.children.filter(this.filterChildren).length > 0
        }
        if (!child.to) {
          return false
        }
        return this.$route.path.includes(child.to.path)
      }
    },
    mounted () {
      if (!this.menu.children) {
        return false
      }
      if (!Array.isArray(this.menu.children)) {
        return false
      }
      if (this.menu.children.filter(this.filterChildren).length > 0) {
        this.$refs.collapsible.open()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .drawer-menu-item
    .q-collapsible-drawer
      .q-collapsible-sub-item
        padding 0
        border-width 0 0 0 0
        border-color #ddd
        border-style solid
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#aaaaaa+0,cccccc+3,f3f1f1+8,f3f1f1+100 */
        background #f3f1f1
        background linear-gradient(to bottom, #d0d0d0 0%, #e6e6e6 3%, #f3f1f1 8%, #f3f1f1 100%)
</style>
