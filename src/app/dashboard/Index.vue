<template>
  <layout-default
    :view="view"
    :left-breakpoint="leftBreakpoint"
    :reveal="reveal"></layout-default>
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
    props: {
      view: {
        default: 'lHh Lpr lFf' // default: 'lHh Lpr fff'
      },
      reveal: {
        default: false
      },
      leftBreakpoint: {
        default: 996
      }
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
