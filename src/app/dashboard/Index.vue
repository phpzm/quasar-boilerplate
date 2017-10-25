<template>
  <layout-default></layout-default>
</template>

<script type="text/javascript">
  import { mapActions } from 'vuex'
  import LayoutDefault from 'src/app/common/layout/Default.vue'
  import { menu } from 'src/domains/bootstrap'

  export default {
    name: 'dashboard',
    components: {
      LayoutDefault
    },
    methods: {
      /**
       * @method changeTitle ({String})
       * @method changeMenu ({Array})
       */
      ...mapActions(['changeTitle', 'changeMenu'])
    },
    created () {
      // noinspection JSCheckFunctionSignatures
      this.changeTitle('Painel de Controle')
      this.changeMenu(menu)
    }
  }
</script>

<style lang="stylus">
</style>
