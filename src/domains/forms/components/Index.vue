<template>
  <common-card>
    <div slot="title">
      <q-icon :name="icon"></q-icon> {{ title }}
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
  import AppLayout from 'src/app/components/layout/AppLayout.vue'
  import CommonCard from 'src/app/components/card/AppCard.vue'
  import { icon, title } from '../model'

  export default {
    components: {
      AppLayout,
      CommonCard
    },
    name: 'forms',
    data: () => ({
      icon,
      title
    }),
    methods: {
      ...mapActions(['setAppModified'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
