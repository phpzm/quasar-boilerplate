<template>
  <div class="app-data-table" :style="style">
    <q-data-table v-bind="{data, columns, config}" @refresh="refresh" @rowclick="rowclick">
      <template v-if="actions.length" slot="col-options" scope="cell">
        <div class="app-data-table-options">
          <q-fab color="primary" direction="right">
            <q-fab-action v-if="permission(action, cell.row)" v-for="action in actions" :key="action.id"
                          @click="handler(action, cell.row)" :color="action.color" :icon="action.icon">
              <q-tooltip :disabled="!action.tooltip">
                {{ action.tooltip }}
              </q-tooltip>
            </q-fab-action>
          </q-fab>
        </div>
      </template>
    </q-data-table>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'

  const containerHeight = 'calc(100vh - 270px)'
  const tableHeight = 'calc(100vh - 320px)'

  export default {
    name: 'app-data-table',
    props: {
      columns: {
        type: Array,
        default: () => ([])
      },
      data: {
        type: Array,
        default: () => ([])
      },
      actions: {
        type: Array,
        default: () => ([])
      },
      rowHeight: {
        default: 50
      },
      bodyHeightProp: {
        default: 'maxHeight'
      },
      bodyHeight: {
        default: 500
      }
    },
    data: () => ({
      style: {
        height: containerHeight
      },
      config: {
        refresh: false,
        noHeader: false,
        columnPicker: false,
        leftStickyColumns: 0,
        rightStickyColumns: 0,
        bodyStyle: {
          height: tableHeight
        },
        rowHeight: '50px',
        responsive: false,
        pagination: undefined,
        messages: {
          noData: '<i class="material-icons">error</i> Nenhum dado para exibir',
          noDataAfterFiltering: '<i>error</i> Nenhum resultado. Por favor revise os dados informados'
        },
        labels: {
          columns: 'Colunas',
          allCols: 'Todas',
          rows: 'Linhas',
          selected: {
            singular: 'item selecionado',
            plural: 'itens selecionados'
          },
          clear: 'Limpar',
          search: 'Pesquisar',
          all: 'Todos'
        }
      }
    }),
    computed: {
      ...mapGetters(['getAuthUser'])
    },
    methods: {
      /**
       * @param {Function} done
       */
      refresh (done) {
        this.$emit('grid.refresh', done)
      },
      /**
       * @param {Object} row
       */
      rowclick (row) {
        this.$emit('grid.rowclick', row)
      },
      /**
       * @param {Object} action
       * @param {Object} row
       */
      permission (action, row) {
        if (typeof action.permission !== 'function') {
          return true
        }
        return action.permission(row, this, this.getAuthUser)
      },
      /**
       * @param {Object} action
       * @param {Object} row
       */
      handler (action, row) {
        if (typeof action.handler === 'function') {
          action.handler(row, this.columns, this)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-data-table
    font-family Roboto
    .app-data-table-options
      position absolute
      margin-top -20px
      .q-btn-round.q-btn-standard
        height 40px
        width 40px
        .q-icon, .q-spinner
          font-size 20px
    .q-data-table
      display flex
      .q-data-table-toolbar.upper-toolbar
        display none
      .q-data-table-container
        overflow auto
      .q-data-table-head
        overflow visible
      .q-data-table-body
        overflow visible
</style>
