<template>
  <div>
    <app-layout :left="left" :right="right" :footer="footer" :swipe="swipe" :flat="flat">
      <app-toolbar slot="header">
        <div slot="right">
          <label>
            <q-checkbox v-model="left" class="red"></q-checkbox>
            Left
          </label>
          <label>
            <q-checkbox v-model="right" class="red"></q-checkbox>
            Right
          </label>
          <label>
            <q-checkbox v-model="footer" class="red"></q-checkbox>
            Footer
          </label>
          <label>
            <q-checkbox v-model="swipe" class="red"></q-checkbox>
            Swipe
          </label>
          <label>
            <q-checkbox v-model="flat" class="red"></q-checkbox>
            Flat
          </label>
        </div>
      </app-toolbar>
    </app-layout>
  </div>
</template>

<script type="text/javascript">
  import AppLayout from 'modules/Common/Layout/AppLayout.vue'
  import AppToolbar from 'src/modules/Common/Layout/AppToolbar.vue'
  import {mapActions} from 'vuex'

  export default {
    name: 'dashboard',
    components: {
      AppLayout, AppToolbar
    },
    methods: {
      ...mapActions(['setAppMenuLeft'])
    },
    data: () => ({
      left: true,
      right: true,
      footer: false,
      swipe: false,
      flat: true
    }),
    created () {
      this.setAppMenuLeft([
        {
          icon: 'home',
          to: {
            path: '/dashboard', exact: true
          },
          label: 'Home'
        },
        {
          icon: 'web',
          to: {
            path: '/dashboard/forms', exact: true
          },
          label: 'Forms'
        },
        {
          icon: 'pie_chart_outlined',
          to: {
            path: '/dashboard/charts', exact: true
          },
          label: 'Charts'
        },
        {
          icon: 'pets',
          to: {
            path: '/dashboard/crud', exact: true
          },
          label: 'CRUD'
        },
        {
          icon: 'power_settings_new',
          to: {
            path: '/', exact: true
          },
          label: 'Logout'
        }
      ])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
