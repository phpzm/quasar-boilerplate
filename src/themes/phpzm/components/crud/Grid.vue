<template>
  <div class="app-crud-grid">
    <app-button-bar :buttons="buttons.top" :handler="handler" :direction="direction"/>
    <hr>
    <app-data-table ref="grid" v-bind="{columns, data, debug, actions: buttons.middle}"></app-data-table>
    <hr>
    <app-button-bar :buttons="buttons.top" :handler="handler" :direction="direction"/>
    <div class="fixed-bottom-right">
      <app-button-bar :buttons="buttons.floating" :handler="handler"/>
    </div>

    <pre>{{ filter.columns }}</pre>
    <!--<q-modal ref="filter" position="right" :content-css="filter.css">-->
      <!--<div class="text-right">-->
        <!--<q-btn round small color="tertiary" icon="close" @click="filterClose()" class="btn-x-small"></q-btn>-->
      <!--</div>-->
      <!--<hr class="light">-->
      <!--<h6>Filtros</h6>-->
      <!--<div class="form">-->
      <!--</div>-->
      <!--<hr>-->
      <!--<div class="form">-->
        <!--<field class="has-100 text-right">-->
          <!--<q-btn color="primary" icon="search" @click="filterApply">Pesquisar</q-btn>-->
          <!--<q-btn color="white" icon="cancel" @click="filterClear">Limpar</q-btn>-->
        <!--</field>-->
      <!--</div>-->
    <!--</q-modal>-->

    <template v-if="debug">
      <app-debugger v-bind="{label: 'data', inspect: data}"></app-debugger>
      <app-debugger v-bind="{label: 'columns', inspect: columns}"></app-debugger>
      <app-debugger v-bind="{label: 'filter', inspect: filter.record}"></app-debugger>
    </template>
  </div>
</template>

<script type="text/javascript">
  import { populateGrid } from 'src/bootstrap/settings'
  import AppDataTable from 'src/themes/phpzm/components/data-table/AppDataTable.vue'
  import AppButtonBar from 'src/themes/phpzm/components/button/AppButtonBar.vue'
  import AppDebugger from 'src/themes/phpzm/components/debugger/AppDebugger.vue'
  import { data, methods, props } from './model'
  import filter from 'src/themes/phpzm/components/crud/model/grid/MixinFilter'

  export default {
    components: {
      AppDataTable, AppButtonBar, AppDebugger
    },
    mixins: [
      data, methods, props, filter
    ],
    name: 'app-crud-grid',
    props: {
      scope: {
        default: () => 'index'
      },
      handlers: {
        type: Object,
        default () {
          return {
            read: (response) => populateGrid(this, response),
            delete: (response) => this.search()
          }
        }
      },
      filters: {
        type: Array,
        default: () => ([])
      },
      pagination: {
        default: () => true
      }
    },
    data: () => ({
      columns: [],
      data: [],
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
            width: typeof item.grid.width === 'number' ? item.grid.width + 'vw' : item.grid.width,
            sort: item.grid.sort ? () => {
              this.$emit('grid.sort', item.grid.field)
            } : undefined
          })
        }
        const filter = item => item.scopes.includes(this.scope)

        const columns = this.schemas.filter(filter).map(map)

        this.columns = columns.filter(column => true)
        this.columns.unshift({field: 'options', label: 'Opções', width: '70px'})

        this.filter.columns = columns.filter(column => column.filter).map(column => {
          column.width = 100
          column.component = this.component + '-' + column.filter.component
          column.value = column.filter.value
          delete column.filter
          return column
        })

        const record = this.filter.columns.reduce((accumulate, filter) => {
          accumulate[filter.field] = filter.value
          return accumulate
        }, {})
        this.$set(this.filter, 'record', record)
      },
      /**
       * @returns {boolean}
       */
      isPaginated () {
        return this.pagination
      },
      /**
       * @param {AxiosError} error
       * @param {string} method
       * @param {Array} parameters
       */
      catch (error, method, parameters) {
        console.log('~>', this.$options.name, error)
      }
    },
    created () {
      this.renderAll()
    },
    mounted () {
      // window.setTimeout(this.search, 100)
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
