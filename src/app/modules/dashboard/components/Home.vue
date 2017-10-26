<template>
  <common-card>
    <div slot="title">
      Home
    </div>
    <div slot="content">
      <q-icon name="home"></q-icon>
    </div>
  </common-card>
</template>

<script type="text/javascript">
  import CommonCard from 'src/app/modules/common/card/Index.vue'

  export default {
    components: {
      CommonCard
    },
    name: 'dashboard-home'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
