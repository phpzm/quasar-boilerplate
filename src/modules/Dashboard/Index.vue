<template>
  <div>
    <app-layout :left="true" :right="true" :footer="false" :flat="true"></app-layout>
  </div>
</template>

<script type="text/javascript">
  import AppLayout from 'modules/Common/Layout/AppLayout.vue'
  export default {
    name: 'auth-index',
    components: {
      AppLayout
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
