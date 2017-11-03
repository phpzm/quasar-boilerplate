<template>
  <q-layout ref="layout" :class="classNames" :view="view" :left-breakpoint="leftBreakpoint" :reveal="reveal">

    <q-toolbar slot="header" class="">
      <slot name="header">
        <q-btn flat @click="toggleLeft">
          <q-icon name="menu"></q-icon>
        </q-btn>

        <q-toolbar-title>
          {{ AppName }}
          <div slot="subtitle">{{ AppTitle }} <span v-if="environment !== 'production'">{{ $q.version }}</span></div>
        </q-toolbar-title>

        <slot name="header-content"></slot>

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

    <q-scroll-area v-if="left" slot="left" class="q-scroll-area">
      <slot name="drawer-left-top">
        <div class="q-drawer-logo">
          <!--suppress HtmlUnknownTarget -->
          <img src="statics/logo/big.png" alt="logo">
        </div>
      </slot>
      <slot name="drawer-left">
        <!--<q-list-header>Left Panel</q-list-header>-->
        <app-drawer-menu :menus="AppMenu"></app-drawer-menu>
      </slot>
    </q-scroll-area>

    <slot name="breadcrumb">
      <div class="breadcrumb-wrapper">
        <app-breadcrumb v-bind="{icon: home}"></app-breadcrumb>
      </div>
    </slot>

    <slot name="content">
      <div class="transition-wrapper">
        <app-transition-slide v-bind="transition"></app-transition-slide>
      </div>
    </slot>
  </q-layout>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import AppBreadcrumb from 'src/themes/phpzm/components/breadcrumb/AppBreadcrumb.vue'
  import AppDrawerMenu from 'src/themes/phpzm/components/layout/fragements/DrawerMenu.vue'
  import AppTransitionSlide from 'src/themes/phpzm/components/transition/AppTransitionSlide.vue'

  export default {
    components: {
      AppBreadcrumb, AppDrawerMenu, AppTransitionSlide
    },
    name: 'app-layout',
    props: {
      view: {
        type: String,
        default: 'lHh Lpr lFf' // default: 'lHh Lpr fff'
      },
      reveal: {
        type: Boolean,
        default: false
      },
      left: {
        type: Boolean,
        default: true
      },
      leftBreakpoint: {
        type: Number,
        default: 996
      },
      home: {
        type: String,
        default: 'home'
      },
      transition: {
        default: () => ({
          height: 'calc(100vh - 100px)',
          padding: '0 10px'
        })
      }
    },
    computed: {
      environment () {
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .layout-default
    .q-scroll-area
      swidth 100%
      height 100%
    .q-drawer-logo
      background #F7F7F7
      text-align center
      padding 20px
      border-bottom 1px #ddd solid
      img
        width 200px
    .q-toolbar-title
      font-family play
    .breadcrumb-wrapper
      position absolute
      padding 0 17px 0 17px
      box-shadow 0 0 4px 2px rgba(0, 0, 0, 0.3)
      background #fff
      width 100%
      height 47px
      z-index 2
    .transition-wrapper
      position relative
      margin 47px 0 0 0

  @media screen and (max-width 768px)
    .layout-default
      .breadcrumb-wrapper
        padding 0 7px 10px 7px
      .layout-page > .transition-wrapper > div > .app-card.router-view
        padding 0 !important
</style>
