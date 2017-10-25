export default {
  props: {
    scope: {
      type: String,
      default: 'index'
    },
    schemas: {
      type: Array,
      default: () => ([]),
      required: true
    },
    action: {
      type: String,
      default: 'common-table-action'
    },
    actions: {
      default: () => ([])
    },
    toolbar: {
      type: Boolean,
      default: true
    },
    page: {
      type: Number,
      default: 1
    },
    pages: {
      type: Number,
      default: 1
    },
    orderly: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Boolean,
      default: false
    },
    header: {
      type: Boolean,
      default: true
    },
    refresh: {
      type: Boolean,
      default: true
    },
    visibility: {
      type: Boolean,
      default: true
    },
    filter: {
      type: Boolean,
      default: true
    },
    search: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    records: {
      type: Array,
      required: true,
      default: () => ([])
    },
    loaded: {
      default: 'none'
    },
    options: {
      type: Object,
      default: () => ({
        label: 'Opções',
        error: 'Não foi possível carregar os dados',
        begin: {
          icon: 'warning',
          disclaimer: 'Ainda não temos nada aqui'
        },
        retry: {
          icon: 'error',
          disclaimer: 'A comunicação com o servidor parece ter um problema'
        },
        noRecords: 'common-table-no-records'
      })
    },
    debounce: {
      type: Number,
      default: 500
    },
    height: {
      default: ''
    },
    editable: {
      default: true
    },
    debug: {
      default: false
    }
  }
}
