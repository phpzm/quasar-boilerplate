<template>
  <app-grid
    v-bind="bind"
    @reload-records="fetchAll"
    @change-search="changeSearch"
    @change-page="changePage"
    @change-sort="changeSort"
  >
    <div slot="custom">
      <slot name="custom"></slot>
    </div>
  </app-grid>
</template>

<script type="text/javascript">
  import AppGrid from 'src/app/components/grid/AppGrid.vue'
  import Data from 'src/app/components/-crud/components/grid/data'
  import Hooks from 'src/app/components/-crud/components/grid/hooks'
  import Methods from 'src/app/components/-crud/components/grid/methods'
  import Props from 'src/app/components/-crud/components/grid/props'
  import Watch from 'src/app/components/-crud/components/grid/watch'

  export default {
    components: {
      AppGrid
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
