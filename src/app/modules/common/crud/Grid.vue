<template>
  <common-grid v-bind="bind"
               @reload-records="fetchAll"
               @change-search="changeSearch"
               @change-page="changePage"
               @change-sort="changeSort">
    <div slot="custom">
      <slot name="custom"></slot>
    </div>
  </common-grid>
</template>

<script type="text/javascript">
  import CommonGrid from 'src/app/modules/common/grid/Grid.vue'
  import Data from 'src/app/modules/common/crud/components/grid/data'
  import Hooks from 'src/app/modules/common/crud/components/grid/hooks'
  import Methods from 'src/app/modules/common/crud/components/grid/methods'
  import Props from 'src/app/modules/common/crud/components/grid/props'
  import Watch from 'src/app/modules/common/crud/components/grid/watch'

  export default {
    components: {
      CommonGrid
    },
    computed: {
      bind () {
        return {
          scope: this.scope,
          schemas: this.schemas,
          actions: this.actions,
          records: this.records,
          header: this.header,
          toolbar: this.toolbar,
          visibility: this.visibility,
          filter: this.filter,
          search: this.search,
          pagination: this.pagination,
          sortable: this.sortable,
          page: this.page,
          pages: this.pages,
          loaded: this.loaded,
          height: this.height,
          debug: this.debug
        }
      }
    },
    mixins: [Data, Hooks, Methods, Props, Watch],
    name: 'crud-grid'
  }
</script>
