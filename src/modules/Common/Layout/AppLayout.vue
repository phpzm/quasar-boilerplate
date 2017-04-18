<template>
  <q-layout>

    <div v-if="header" slot="header" class="toolbar">

      <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()" v-if="left">
        <i>menu</i>
      </button>
      <app-toolbar></app-toolbar>
      <button @click="$refs.rightDrawer.open()" v-if="right">
        <i>menu</i>
      </button>
    </div>

    <app-drawer-left ref="leftDrawer" v-if="left"></app-drawer-left>

    <slot name="content">
      <router-view class="layout-view"></router-view>
    </slot>

    <app-drawer-right ref="rightDrawer" v-if="right"></app-drawer-right>

    <div slot="footer" v-if="footer">
      <app-footer></app-footer>
    </div>

  </q-layout>
</template>

<script type="text/javascript">
  import AppToolbar from 'src/modules/Common/Layout/AppToolbar.vue'
  import AppDrawerLeft from 'src/modules/Common/Layout/AppDrawerLeft.vue'
  import AppDrawerRight from 'src/modules/Common/Layout/AppDrawerRight.vue'
  import AppFooter from 'src/modules/Common/Layout/AppFooter.vue'

  export default {
    name: 'app-layout',
    components: {
      AppToolbar, AppDrawerLeft, AppDrawerRight, AppFooter
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
      }
    },
    data: () => ({}),
    computed: {},
    methods: {},
    mounted () {
    },
    created () {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
