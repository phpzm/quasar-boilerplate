<template>
  <app-crud-grid v-bind="$props"></app-crud-grid>
</template>

<script type="text/javascript">
  import AppCrudGrid from 'genesis/components/crud/Grid.vue'
  import MixinProps from './mixins/MixinProps'

  export default {
    mixins: [
      MixinProps
    ],
    name: 'crud-grid',
    components: {
      AppCrudGrid
    },
    props: {
      position: {
        type: String,
        default: () => 'left'
      },
      slots: {
        type: Array,
        default: () => ([])
      },
      filters: {
        type: Array,
        default: () => ([])
      },
      paginate: {
        type: Boolean,
        default: () => true
      },
      unity: {
        type: String,
        default: () => 'vw'
      },
      filtering: {
        type: Boolean,
        default: () => true
      },
      limiting: {
        type: Number,
        default: () => (25)
      },
      styles: {
        type: Object,
        default: () => ({
          height: 'calc(100vh - 290px)',
          minHeight: '200px'
        })
      },
      bodyStyle: {
        type: Object,
        default: () => ({
          height: 'calc(100vh - 330px)',
          minHeight: '170px'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
