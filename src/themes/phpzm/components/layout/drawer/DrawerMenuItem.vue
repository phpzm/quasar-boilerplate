<template>
  <div class="drawer-menu-item" :class="{'with-shadow': withShadow}">

    <div v-if="menu.group">
      <small>{{ menu.label }}</small>
      <hr>
      <template v-for="item in menu.children">
        <app-drawer-menu-item :menu="item" :badges="badges" :withShadow="withShadow"></app-drawer-menu-item>
      </template>
    </div>

    <q-collapsible v-else-if="isCollapsible" ref="collapse" v-bind="collapsible">
      <template v-for="child in menu.children">
        <app-drawer-menu-item :menu="child" :badges="badges" :withShadow="withShadow"></app-drawer-menu-item>
      </template>
    </q-collapsible>

    <q-side-link v-else :to="menu.to" :exact="menu.exact" item>
      <q-item-side v-if="menu.left" v-bind="menu.left"></q-item-side>
      <q-item-main :label="menu.label" :sublabel="menu.sublabel"></q-item-main>
      <q-item-side v-if="menu.right" v-bind="menu.right" right></q-item-side>
    </q-side-link>

    <q-chip v-if="badges[menu.id]" v-bind="badge">{{ badges[menu.id] }}</q-chip>

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
      },
      withShadow: {
        type: Boolean,
        default: () => true
      }
    },
    computed: {
      isCollapsible () {
        return this.menu.children && this.menu.children.length > 0
      },
      collapsible () {
        const collapsible = {
          'class': ['q-collapsible-drawer'],
          'label': this.menu.label
        }
        if (this.menu.icon) {
          collapsible['icon'] = this.menu.icon
        }
        return collapsible
      },
      badge () {
        const withIcon = !!(this.menu.icon) || !!(this.menu.left && this.menu.left.icon)
        return {
          'floating': true,
          'color': 'red',
          'class': {'info red pulse': true, 'with-icon': withIcon}
        }
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
        if (this.$refs.collapse) {
          this.$refs.collapse.open()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $drawer-item-border = #a7a7a7

  .drawer-menu-item
    position relative
    .q-chip.floating
      top -4px
      left 23px
      padding 0 6px
      font-size 10px
      border-radius 50%
      &.with-icon
        left 52px
    .q-collapsible
      &.q-collapsible-opened > .q-item:before
        content ' '
        position absolute
        bottom 0
        left 8px
        width 5px
        height 5px
        border-radius 5px
        background $drawer-item-border
      .q-collapsible-sub-item
        margin 0 0 0 10px
        padding 0
        .drawer-menu-item
          border-left 1px solid $drawer-item-border
          &:before
            content ' '
            position absolute
            top 0
            width 10px
            height 20px
            border-bottom 1px solid $drawer-item-border
        .drawer-menu-item:last-child
          border-left none
          &:before
            border-left 1px solid $drawer-item-border

    &.with-shadow
      .q-collapsible
        .q-collapsible-sub-item
          border-left 1px solid $drawer-item-border
          background #fafafa
          box-shadow inset 1px 1px 3px 1px rgba(0, 0, 0, 0.16), inset 1px -1px 3px 1px rgba(0, 0, 0, 0.1)
          .drawer-menu-item
            border-left none
          .drawer-menu-item:last-child
            &:before
              border-left none

    small
      color #9f9f9f
      display block
      padding 5px 10px 0 10px
    hr
      margin 0 0 5px 0
</style>
