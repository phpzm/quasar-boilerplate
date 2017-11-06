export default {
  props: {
    columns: {
      type: Array,
      default: () => ([])
    },
    slots: {
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
    position: {
      type: String,
      default: () => 'left'
    },
    styles: {
      type: Object,
      default: () => ({
        height: 'calc(100vh - 270px)'
      })
    },
    bodyStyle: {
      type: Object,
      default: () => ({
        height: 'calc(100vh - 320px)'
      })
    },
    messages: {
      type: Object,
      default: () => ({
        noData: '<i class="material-icons text-primary">error</i> Nenhum dado para exibir',
        noDataAfterFiltering: '<i class="material-icons text-primary">error</i> Nenhum resultado. Por favor revise os dados informados'
      })
    },
    labels: {
      type: Object,
      default: () => ({
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
      })
    }
  }
}
