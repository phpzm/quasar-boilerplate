<template>
  <div class="app-crud-grid">
    <app-button-bar :buttons="buttons.top" :handler="handler"/>
    <hr>
    <app-data-table ref="grid" v-bind="{columns, data, actions: buttons.middle}"></app-data-table>
    <hr>
    <app-button-bar :buttons="buttons.top" :handler="handler"/>
    <div class="fixed-bottom-right">
      <app-button-bar :buttons="buttons.floating" :handler="handler"/>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { populateGrid } from 'src/bootstrap/settings'
  import AppDataTable from 'src/app/components/data-table/AppDataTable.vue'
  import AppButtonBar from 'src/app/components/button/AppButtonBar.vue'
  import { data, methods, props } from './model'

  export default {
    components: {
      AppButtonBar,
      AppDataTable
    },
    mixins: [data, methods, props],
    name: 'app-crud-grid',
    data: () => ({
      columns: [],
      data: [],
      pagination: true,
      page: 1,
      pages: 1
    }),
    methods: {
      /**
       */
      renderElements () {
        const map = item => {
          return Object.assign({}, item.grid, {
            field: item.grid.field,
            width: item.grid.width + 'vw',
            sort: item.grid.sort ? () => {
              this.$emit('grid.sort', item.grid.field)
            } : undefined
          })
        }
        const filter = item => item.scopes.includes(this.scope)

        this.columns = this.schemas.filter(filter).map(map)
        this.columns.unshift({field: 'options', label: 'Opções', width: '70px'})
      },
      /**
       * @param {AxiosResponse} response
       * @param {string} method
       */
      then (response, method) {
        const handlers = {
          read: (response) => populateGrid(this, response),
          delete: () => this.search()
        }
        if (handlers[method]) {
          handlers[method](response)
        }
      },
      /**
       * @param {AxiosError} error
       * @param {string} method
       * @param {Array} parameters
       */
      catch (error, method, parameters) {
        const handlers = {}
        if (handlers[method]) {
          handlers[method](error)
        }
      }
    },
    created () {
      this.renderAll()
    },
    mounted () {
      window.setTimeout(this.search, 100)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-crud-grid
    padding 16px 0 0 0
    hr
      margin 10px 0
    .fixed-bottom-right
      margin 0 20px 10px 0
</style>
