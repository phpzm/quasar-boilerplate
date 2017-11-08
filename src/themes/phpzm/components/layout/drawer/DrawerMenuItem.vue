<template>
  <div class="drawer-menu-item" :class="{'with-shadow': shadow}">

    <div v-if="menu.group">
      <small>
        {{ menu.label }}
        <app-tooltip :disable="!menu.tooltip">{{ menu.tooltip }}</app-tooltip>
      </small>
      <hr>
      <template v-for="item in menu.children">
        <app-drawer-menu-item :menu="item" :badges="badges" :shadow="shadow"></app-drawer-menu-item>
      </template>
    </div>

    <q-collapsible v-else-if="isCollapsible" ref="collapse" v-bind="collapsible">
      <template v-for="child in menu.children">
        <app-drawer-menu-item :menu="child" :badges="badges" :shadow="shadow"></app-drawer-menu-item>
      </template>
    </q-collapsible>

    <q-side-link v-else :to="menu.to" :exact="menu.exact" item>
      <q-item-side v-if="menu.left" v-bind="menu.left"></q-item-side>
      <q-item-main :label="menu.label" :sublabel="menu.sublabel"></q-item-main>
      <q-item-side v-if="menu.right" v-bind="menu.right" right></q-item-side>
    </q-side-link>

    <q-chip v-if="badges[menu.id]" v-bind="badge">{{ badges[menu.id] }}</q-chip>

    <app-tooltip :disable="!menu.tooltip">{{ menu.tooltip }}</app-tooltip>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'app-drawer-menu-item',
    props: {
      menu: {
        type: Object,
        required: true
      },
      badges: {
        type: Object,
        default: () => ({})
      },
      shadow: {
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
  @import '~variables'

  .drawer-menu-item
    position relative
    .router-link-exact-active
      background $app-drawer-menu-active
      .q-item-side
        .q-item-icon
          color $app-drawer-menu-active-icon
      .q-item-main
        .q-item-label
          color $app-drawer-menu-active-color
    .q-item-side
      .q-item-icon
        color $app-drawer-menu-icon
    .q-item-main
      .q-item-label
        color $app-drawer-menu-color
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
        background $app-drawer-menu-item-border
      .q-collapsible-sub-item
        margin 0 0 0 10px
        padding 0
        .drawer-menu-item
          border-left 1px solid $app-drawer-menu-item-border
          &:before
            content ' '
            position absolute
            top 0
            width 10px
            height 20px
            border-bottom 1px solid $app-drawer-menu-item-border
        .drawer-menu-item:last-child
          border-left none
          &:before
            border-left 1px solid $app-drawer-menu-item-border
    &.with-shadow
      .q-collapsible
        .q-collapsible-sub-item
          border-left 1px solid $app-drawer-menu-item-border
          border-bottom 1px solid $app-drawer-menu-item-border
          border-radius 0 0 0 3px
          background $app-drawer-menu-item-open
          box-shadow $app-drawer-menu-item-shadow
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
