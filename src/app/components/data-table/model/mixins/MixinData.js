const containerHeight = 'calc(100vh - 270px)'
const tableHeight = 'calc(100vh - 320px)'

export default {
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
        noData: '<i class="material-icons text-primary">error</i> Nenhum dado para exibir',
        noDataAfterFiltering: '<i class="material-icons text-primary">error</i> Nenhum resultado. Por favor revise os dados informados'
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
  })
}
