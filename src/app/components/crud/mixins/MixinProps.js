import { toast } from 'genesis/support/message'
import { $status } from 'src/bootstrap/configure/http'

export default {
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
    timeout: {
      type: Number,
      default: () => 100
    },
    debug: {
      type: Boolean,
      default: () => false
    },
    error: {
      type: Object,
      default: () => ({
        create: (error, record) => {
          const status = $status(error.response)
          toast(`Não foi possível salvar o registro. O servidor retornou: '${status.code}'`)
        },
        read: (error, record) => {
          const status = $status(error.response)
          toast(`Não foi possível ler os dados. O servidor retornou: '${status.code}'`)
        },
        update: (error, record) => {
          const status = $status(error.response)
          toast(`Não foi possível atualizar os dados. O servidor retornou: '${status.code}'`)
        },
        destroy: (error, record) => {
          const status = $status(error.response)
          toast(`Não foi possível remover o registro. O servidor retornou: '${status.code}'`)
        }
      })
    },

    rule: {
      type: String,
      default: () => ''
    },
    separator: {
      type: String,
      default: () => ''
    },
    changer: {
      type: String,
      default: () => '~'
    },
    watches: {
      type: Object,
      default: () => ({})
    },

    scope: {
      type: String,
      default: () => 'index'
    },
    messages: {
      type: Object,
      default: () => ({
        create: 'Registro criado com sucesso',
        read: '',
        update: 'Registro atualizado com sucesso',
        delete: 'Registro apagado com sucesso'
      })
    },
    handlers: {
      type: Object
    }
  }
}
