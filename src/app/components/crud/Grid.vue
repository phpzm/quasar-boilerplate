<template>
  <app-data-table v-bind="{columns, data, actions: buttons.middle}"></app-data-table>
</template>

<script type="text/javascript">
  import { populateGrid } from 'src/bootstrap/settings'
  import AppDataTable from 'src/app/components/data-table/AppDataTable.vue'
  import { actions } from './model'

  export default {
    components: {
      AppDataTable
    },
    name: 'app-base-grid',
    props: {
      service: {
        required: true,
        default: () => ({})
      },
      path: {
        required: true,
        default: () => ''
      },
      schemas: {
        required: true,
        default: () => ([])
      },
      actions: {
        default: () => null
      },
      scope: {
        default: () => 'index'
      }
    },
    data: () => ({
      columns: [],
      data: [],
      pagination: true,
      page: 1,
      pages: 1,
      buttons: {
        top: [],
        middle: [],
        bottom: [],
        floating: []
      }
    }),
    methods: {
      runFetch () {
        this.service.get().then((response) => {
          populateGrid(this, response)
        })
      },
      renderAll () {
        this.renderColumns()
        this.renderActions()
      },
      renderColumns () {
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
      renderActions () {
        let buttons = actions(this, this.actions)

        this.buttons.middle = buttons.filter(button => button.positions.includes('middle'))
      },
      /**
       * @param {string} path
       * @param {Object} query
       */
      browse (path, query = {}) {
        if (query !== undefined) {
          query = Object.assign({}, query, this.$route.query)
        }
        this.$router.push({path, query})
      }
    },
    created () {
      this.renderAll()
    },
    mounted () {
      window.setTimeout(this.runFetch, 100)
    }
  }
</script>
