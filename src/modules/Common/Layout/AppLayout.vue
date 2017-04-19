<template>
  <q-layout :class="classNames">

    <div v-if="header" slot="header" class="toolbar">

      <app-drawer-toggle v-if="left" :drawer="leftDrawer"
                         side="left" class="hide-on-drawer-visible"></app-drawer-toggle>

      <app-toolbar></app-toolbar>

      <app-drawer-toggle v-if="right" :drawer="rightDrawer"
                         side="right" class=""></app-drawer-toggle>
    </div>

    <app-drawer-left ref="leftDrawer" v-if="left"></app-drawer-left>

    <slot name="content">
      <div class="layout-view">
        <transition name="slide-left">
          <router-view class="layout-router"></router-view>
        </transition>
      </div>
    </slot>

    <app-drawer-right ref="rightDrawer" v-if="right"></app-drawer-right>

    <div slot="footer" v-if="footer">
      <app-footer></app-footer>
    </div>

  </q-layout>
</template>

<script type="text/javascript">
  import AppToolbar from 'src/modules/Common/Layout/AppToolbar.vue'
  import AppDrawerToggle from 'src/modules/Common/Layout/AppDrawerToggle.vue'
  import AppDrawerLeft from 'src/modules/Common/Layout/AppDrawerLeft.vue'
  import AppDrawerRight from 'src/modules/Common/Layout/AppDrawerRight.vue'
  import AppFooter from 'src/modules/Common/Layout/AppFooter.vue'

  export default {
    name: 'app-layout',
    components: {
      AppToolbar, AppDrawerToggle, AppDrawerLeft, AppDrawerRight, AppFooter
    },
    props: {
      header: {
        type: Boolean,
        default: true
      },
      left: {
        type: Boolean,
        default: true
      },
      right: {
        type: Boolean,
        default: true
      },
      footer: {
        type: Boolean,
        default: true
      },
      flat: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      scrolled: false,
      rightDrawer: {},
      leftDrawer: {}
    }),
    computed: {
      classNames () {
        const classNames = ['app-layout']
        if (this.flat) {
          classNames.push('flat-header')
        }
        if (!this.scrolled) {
          classNames.push('no-scroll')
        }
        return classNames
      }
    },
    methods: {},
    mounted () {
      this.leftDrawer = this.$refs.leftDrawer
      this.rightDrawer = this.$refs.rightDrawer
    },
    created () {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .flat-header
    &.no-scroll
      .layout-header
        box-shadow none
        padding-left 28px

  @media (min-width: 768px)
    .flat-header
      &.no-scroll
        .layout-header
          padding-left 280px
</style>
