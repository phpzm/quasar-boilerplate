<template>
  <common-card>
    <div slot="title">
      Formulários
    </div>
    <div slot="content">
      <q-icon name="pie_chart"></q-icon>
      <hr>
      <q-btn @click="setAppModified(true)">Forçar estado modificado</q-btn>
    </div>
  </common-card>
</template>

<script type="text/javascript">
  import { mapActions } from 'vuex'
  import CommonCard from 'src/app/components/card/Index.vue'

  export default {
    components: {
      CommonCard
    },
    name: 'forms',
    methods: {
      ...mapActions(['setAppModified'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
