<template>
  <common-card>
    <div slot="title">
      <q-icon name="subtitles"></q-icon> Formulários
    </div>
    <div slot="content">
      <hr>
      <q-btn @click="setAppModified(true)">Forçar estado modificado</q-btn>
      <hr>
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
