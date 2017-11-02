<template>
  <app-card>
    <div slot="title">
      Home
    </div>
    <div slot="content">
      <q-icon name="home"></q-icon>
    </div>
  </app-card>
</template>

<script type="text/javascript">
  import AppCard from 'src/themes/phpzm/components/card/AppCard.vue'

  export default {
    components: {
      AppCard
    },
    name: 'dashboard-home'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
