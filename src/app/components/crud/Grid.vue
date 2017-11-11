<template>
  <app-crud-grid v-bind="$props"></app-crud-grid>
</template>

<script type="text/javascript">
  import AppCrudGrid from 'genesis/components/crud/Grid.vue'

  export default {
    name: 'crud-grid',
    components: {
      AppCrudGrid
    },
    props: {
      scopes: {
        type: Object,
        default: () => ({
          index: {},
          create: {
            method: 'create'
          },
          edit: {
            method: 'update'
          },
          view: {
            readonly: true
          }
        })
      },
      service: {
        type: Object,
        required: true,
        default: () => ({})
      },
      path: {
        type: String,
        required: true,
        default: () => ''
      },
      schemas: {
        type: Array,
        required: true,
        default: () => ([])
      },
      actions: {
        default: () => null
      },
      component: {
        type: String,
        default: () => 'field'
      },
      id: {
        type: String,
        default: () => 'id'
      },
      timeout: {
        type: Number,
        default: () => 100
      },
      debug: {
        type: Boolean,
        default: () => false
      },

      scope: {
        type: String,
        default: () => 'index'
      },
      messages: {
        type: Object,
        default: () => ({
          read: '',
          delete: 'Registro apagado com sucesso'
        })
      },
      handlers: {
        type: Object
      },
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
      bottom: {
        type: Boolean,
        default: () => true
      },
      top: {
        type: Boolean,
        default: () => true
      },
      floating: {
        type: Boolean,
        default: () => true
      },
      filtering: {
        type: Boolean,
        default: () => true
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
  .app-crud-grid
    padding 16px 0 0 0
    &.--grid-filtering
      .--button-filter
        background darkred !important
        i
          color white !important
    hr
      margin 10px 0
    .fixed-bottom-right
      margin 5px
</style>
