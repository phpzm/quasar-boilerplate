<template>
  <div>
    <app-layout :left="true" :right="true" :footer="false" :flat="true"></app-layout>
  </div>
</template>

<script type="text/javascript">
  import AppLayout from 'modules/Common/Layout/AppLayout.vue'
  import {mapActions} from 'vuex'

  export default {
    name: 'auth-index',
    components: {
      AppLayout
    },
    methods: {
      ...mapActions(['setAppMenuLeft'])
    },
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
          icon: 'book',
          to: {
            path: '/dashboard/academic', exact: true
          },
          label: 'Acadêmico'
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
