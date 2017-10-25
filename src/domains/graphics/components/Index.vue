<template>
  <common-card>
    <div slot="title">
      Gráficos
    </div>
    <div slot="content">
      <q-icon name="pie_chart"></q-icon>

      <button @click="changeModified(true)">Modify</button>
    </div>
  </common-card>
</template>

<script type="text/javascript">
  import { mapActions } from 'vuex'
  import CommonCard from 'src/app/common/card/Index.vue'

  export default {
    components: {
      CommonCard
    },
    name: 'graphics',
    methods: {
      ...mapActions(['changeModified'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
