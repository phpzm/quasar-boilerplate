<template>
  <app-crud-form v-bind="$props"></app-crud-form>
</template>

<script type="text/javascript">
  import AppCrudForm from 'genesis/components/crud/Form.vue'
  import MixinProps from './mixins/MixinProps'

  export default {
    mixins: [
      MixinProps
    ],
    name: 'crud-form',
    components: {
      AppCrudForm
    },
    props: {
      tabs: {
        type: Array,
        default: () => ([])
      },
      tab: {
        type: String,
        default: () => ''
      },
      change: {
        type: Function
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
