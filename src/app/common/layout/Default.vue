<template>
  <q-layout
    ref="layout"
    :class="['layout-default', environment]"
    :view="view"
    :left-breakpoint="leftBreakpoint"
    :reveal="reveal">

    <q-toolbar slot="header" class="">
      <slot name="header">
        <!--suppress JSUnresolvedVariable -->
        <q-btn flat @click="$refs.layout.toggleLeft()">
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
              <q-item v-for="(menu, index) in menus" :key="index" @click="handlerMenu(menu)" separator>
                <q-item-side :icon="menu.icon"></q-item-side>
                <q-item-main>{{ menu.label }}</q-item-main>
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>
      </slot>
    </q-toolbar>

    <q-scroll-area slot="left" style="width: 100%; height: 100%">
      <div class="q-drawer-logo">
        <!--suppress HtmlUnknownTarget -->
        <img src="statics/logo/big.png" alt="logo" style="width: 200px">
      </div>
      <slot name="left">
        <!--<q-list-header>Left Panel</q-list-header>-->
        <template v-for="menu in AppMenu">

          <q-collapsible v-if="menu.children" :icon="menu.icon" :label="menu.label" class="q-collapsible-drawer">

            <q-side-link v-for="(child, index) in menu.children" :key="index" :to="child.to" :exact="child.exact" item>
              <q-item-side v-if="child.left" v-bind="child.left"></q-item-side>
              <q-item-main :label="child.label" :sublabel="child.sublabel"></q-item-main>
              <q-item-side v-if="child.right" v-bind="child.right" right></q-item-side>
            </q-side-link>

          </q-collapsible>

          <q-side-link v-else :to="menu.to" :exact="menu.exact" item>
            <q-item-side v-if="menu.left" v-bind="menu.left"></q-item-side>
            <q-item-main :label="menu.label" :sublabel="menu.sublabel"></q-item-main>
            <q-item-side v-if="menu.right" v-bind="menu.right" right></q-item-side>
          </q-side-link>
        </template>
      </slot>
    </q-scroll-area>

    <slot name="breadcrumb">
      <breadcrumb></breadcrumb>
    </slot>

    <slot name="content">
      <transition :name="transition">
        <router-view :key="$route" class="router-view"></router-view>
      </transition>
    </slot>
  </q-layout>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import { actions } from 'src/app/dashboard/model'
  import Breadcrumb from 'src/app/common/layout/Breadcrumb.vue'

  export default {
    components: {
      Breadcrumb
    },
    name: 'layout-default',
    data: () => ({
      menus: actions,
      transition: 'slide-left'
    }),
    props: {
      view: {
        default: 'lHh Lpr lFf' // default: 'lHh Lpr fff'
      },
      reveal: {
        default: false
      },
      leftBreakpoint: {
        default: 996
      },
      hideTabs: {
        default: false
      }
    },
    computed: {
      ...mapGetters(['AppTitle', 'AppName', 'AppMenu']),
      environment () {
        // noinspection ES6ModulesDependencies
        return process.env.NODE_ENV
      }
    },
    methods: {
      handlerMenu (menu) {
        menu.handler(this)
        // noinspection JSUnresolvedVariable
        this.$refs.popover.close()
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .layout-default
    .layout-page > .common-card
      padding 0 10px 10px 10px
    .layout-page > .breadcrumb
      margin 10px 20px -10px 20px
    .q-drawer-logo
      background #F7F7F7
      text-align center
      padding 20px
      border-bottom 1px #ddd solid
    .q-toolbar-title
      font-family play
    .q-collapsible-drawer
      .q-collapsible-sub-item
        padding 8px 2px
        border-width 0 0 1px 0
        border-color #ddd
        border-style solid
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#aaaaaa+0,cccccc+3,f3f1f1+8,f3f1f1+100 */
        background #f3f1f1
        background linear-gradient(to bottom, #d0d0d0 0%, #e6e6e6 3%, #f3f1f1 8%, #f3f1f1 100%)

    .router-view
      position absolute
      width 100%
      height 100%
      transition transform .3s

    .slide-left-enter
      transform translate(100%, 0)
    .slide-left-leave-to
      transform translate(-100%, 0)

    .slide-right-enter
      transform translate(-100%, 0)
    .slide-right-leave-to
      transform translate(100%, 0)

  @media screen and (max-width 768px)
    .layout-default
      .layout-page > .common-card
        padding 0
      .layout-page > .breadcrumb
        margin 10px 10px -10px 10px
</style>
