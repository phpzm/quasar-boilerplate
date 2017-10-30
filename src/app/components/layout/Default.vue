<template>
  <q-layout ref="layout" :class="classNames" :view="view" :left-breakpoint="leftBreakpoint" :reveal="reveal">

    <q-toolbar slot="header" class="">
      <slot name="header">
        <!--suppress JSUnresolvedVariable -->
        <q-btn flat @click="toggleLeft">
          <q-icon name="menu"></q-icon>
        </q-btn>

        <q-toolbar-title>
          {{ AppName }}
          <div slot="subtitle">{{ AppTitle }}</div>
        </q-toolbar-title>

        <q-btn flat @click="">
          <q-icon name="more_vert"></q-icon>
          <q-popover ref="popover" class="q-popover-menu">
            <q-list item-separator highlight link>
              <!--suppress CommaExpressionJS -->
              <q-item v-for="(menu, index) in getDashboardOptions" :key="index" @click="handlerMenu(menu)" separator>
                <q-item-side :icon="menu.icon"></q-item-side>
                <q-item-main>{{ menu.label }}</q-item-main>
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>
      </slot>
    </q-toolbar>

    <q-scroll-area v-if="left" slot="left" style="width: 100%; height: 100%">
      <slot name="drawer-left-top">
        <div class="q-drawer-logo">
          <!--suppress HtmlUnknownTarget -->
          <img src="statics/logo/big.png" alt="logo" style="width: 200px">
        </div>
      </slot>
      <slot name="drawer-left">
        <!--<q-list-header>Left Panel</q-list-header>-->
        <drawer-menu :menus="AppMenu"></drawer-menu>
      </slot>
    </q-scroll-area>

    <slot name="breadcrumb">
      <div style="padding: 0 17px">
        <breadcrumb></breadcrumb>
      </div>
    </slot>

    <slot name="content">
      <div style="margin: 10px 0 0 0">
        <transition-slide :height="'calc(100vh - 105px)'" :padding="'0 10px'"></transition-slide>
      </div>
    </slot>
  </q-layout>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import Breadcrumb from 'src/app/components/layout/Breadcrumb.vue'
  import DrawerMenu from 'src/app/components/layout/DrawerMenu.vue'
  import TransitionSlide from 'src/app/components/transition/Slide.vue'

  export default {
    components: {
      Breadcrumb, DrawerMenu, TransitionSlide
    },
    name: 'layout-default',
    props: {
      view: {
        default: 'lHh Lpr lFf' // default: 'lHh Lpr fff'
      },
      reveal: {
        default: false
      },
      left: {
        default: true
      },
      leftBreakpoint: {
        default: 996
      }
    },
    computed: {
      environment () {
        // noinspection ES6ModulesDependencies
        return process.env.NODE_ENV
      },
      classNames () {
        return ['layout-default', this.environment]
      },
      ...mapGetters(['AppTitle', 'AppName', 'AppMenu', 'getDashboardOptions'])
    },
    methods: {
      handlerMenu (menu) {
        menu.handler(this)
        // noinspection JSUnresolvedVariable
        this.$refs.popover.close()
      },
      toggleLeft () {
        if (this.left) {
          this.$refs.layout.toggleLeft()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .layout-default
    .q-drawer-logo
      background #F7F7F7
      text-align center
      padding 20px
      border-bottom 1px #ddd solid
    .q-toolbar-title
      font-family play

  @media screen and (max-width 768px)
    .layout-default
      .layout-page > .common-card
        padding 0
      .layout-page > .breadcrumb
        margin 10px 10px -10px 10px
</style>
