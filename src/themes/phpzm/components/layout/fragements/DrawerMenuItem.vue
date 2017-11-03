<template>
  <div class="drawer-menu-item">

    <div v-if="menu.group">
      <small>
        {{ menu.label }} <q-tooltip :disable="!menu.tooltip">{{ menu.tooltip }}</q-tooltip>
      </small>
      <hr>
      <template v-for="item in menu.items">
        <app-drawer-menu-item :menu="item" :badges="badges"></app-drawer-menu-item>
      </template>
    </div>

    <q-collapsible v-else-if="hasChildren" ref="collapsible" :icon="menu.icon" :label="menu.label" :class="classNames">
      <template v-for="child in menu.children">
        <app-drawer-menu-item :menu="child" :badges="badges"></app-drawer-menu-item>
      </template>
    </q-collapsible>

    <q-side-link v-else :to="menu.to" :exact="menu.exact" item>
      <q-item-side v-if="menu.left" v-bind="menu.left"></q-item-side>
      <q-item-main :label="menu.label" :sublabel="menu.sublabel"></q-item-main>
      <q-item-side v-if="menu.right" v-bind="menu.right" right></q-item-side>
    </q-side-link>

    <q-chip v-if="badges[menu.id]" floating color="red" class="info red pulse">{{ badges[menu.id] }}</q-chip>

    <q-tooltip :disable="!menu.tooltip">{{ menu.tooltip }}</q-tooltip>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'app-drawer-menu-item',
    props: {
      menu: {
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
      /**
       * @param {Object} child
       * @returns {boolean}
       */
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
    position  relative
    .q-chip.floating
      left 52px
      top -2px
      padding 3px
      font-size 10px
    .q-collapsible-drawer
      .q-collapsible-sub-item
        padding 0
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#aaaaaa+0,cccccc+3,f3f1f1+8,f3f1f1+100 */
        background #fafafa
        background linear-gradient(to bottom, #c9c9c9 0%, #eaeaea 3%, #f8f8f8 10%, #fafafa 50%, #f8f8f8 90%, #efefef 98%, #c5c5c5 100%)
    small
      color #9f9f9f
      display block
      padding 5px 10px 0 10px
    hr
      margin 0 0 5px 0
</style>
