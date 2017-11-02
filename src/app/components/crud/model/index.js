import { confirm } from 'src/app/support/message/index'
import { first } from 'src/app/infra/services/http/resource'

export { default as methods } from 'src/app/components/crud/model/mixin/MixinMethods'
export { default as data } from 'src/app/components/crud/model/mixin/MixinData'
export { default as props } from 'src/app/components/crud/model/mixin/MixinProps'

/**
 * @param {Object} $this
 * @param {string} id
 * @return {Array}
 */
const buttons = ($this) => {
  return [
    // middle
    {
      id: 'view',
      permission: 1,
      color: 'white',
      scopes: ['index'],
      positions: ['middle'],
      icon: 'search',
      label: 'Detalhes',
      tooltip: 'Visualize detalhes deste registro',
      handler: (record, schemas, $component) => {
        $this.browse($this.path + '/' + record[$this.id])
      }
    },
    {
      id: 'edit',
      permission: 2,
      color: 'primary',
      scopes: ['index'],
      positions: ['middle'],
      icon: 'edit',
      label: 'Editar',
      tooltip: 'Edite este registro',
      handler: (record, schemas, $component) => {
        $this.browse($this.path + '/' + record[$this.id] + '/' + 'edit')
      }
    },
    {
      id: 'destroy',
      permission: 3,
      color: 'negative',
      scopes: ['index'],
      positions: ['middle'],
      icon: 'delete',
      label: 'Apagar',
      tooltip: 'Apague este registro',
      handler: (record, schemas, $component) => {
        confirm('Confirmação', 'Deseja apagar este registro?', () => {
          $this.delete(record[$this.id])
        })
      }
    },
    // grid
    {
      id: 'refresh',
      permission: 1,
      color: 'primary',
      scopes: ['index'],
      positions: ['top', 'bottom'],
      icon: 'refresh',
      tooltip: 'Recarrega a tabela',
      handler: (record, schemas, $component) => {
        $this.search()
      }
    },
    {
      id: 'retry',
      permission: 2,
      color: 'primary',
      scopes: ['retry'],
      positions: ['center'],
      icon: '',
      label: 'Tentar novamente',
      tooltip: 'Realizar uma nova tentativa de recuperação de dados',
      handler: (record, schemas, $component) => {
        $this.read()
      }
    },
    {
      id: 'first',
      permission: 2,
      color: 'primary',
      scopes: ['empty'],
      positions: ['center'],
      icon: 'add',
      label: 'Criar um novo registro',
      tooltip: 'Inicie a criação de um novo registro',
      handler: (record, schemas, $component) => {
        $this.browse($this.path + '/' + 'create')
      }
    },
    // form
    {
      id: 'create',
      permission: 2,
      color: 'primary',
      scopes: ['create'],
      positions: ['top', 'bottom'],
      validate: (record, schemas, $component) => {
        return !$component.status
      },
      icon: '',
      label: 'Salvar',
      tooltip: 'Salvar as alterações feitas a este registro',
      handler: (record, schemas, $component) => {
        $this.save(record, (response) => {
          $this.browse($this.path + '/' + first(response)[$this.id] + '/' + 'edit')
        })
      }
    },
    {
      id: 'update',
      permission: 2,
      color: 'primary',
      scopes: ['edit'],
      positions: ['top', 'bottom'],
      validate: (record, schemas, $component) => {
        return !$component.status
      },
      icon: '',
      label: 'Salvar',
      tooltip: 'Salvar as alterações feitas a este registro',
      handler: (record, schemas, $component) => {
        $this.save(record)
      }
    },
    {
      id: 'create-and-add',
      permission: 2,
      color: 'white',
      scopes: ['create', 'edit'],
      positions: ['top', 'bottom'],
      validate: (record, schemas, $component) => {
        return !$component.status
      },
      icon: '',
      label: 'Salvar & Novo',
      tooltip: 'Salva este registro e abre nova tela para criação de um novo registro',
      handler: (record, schemas, $component) => {
        $this.save(record, (response) => {
          $this.browse($this.path + '/' + 'create')
        })
      }
    },
    {
      id: 'start',
      permission: 1,
      color: 'white',
      scopes: ['create', 'view', 'edit'],
      positions: ['top', 'bottom'],
      icon: 'subject',
      label: '',
      tooltip: 'Abre a lista de registros',
      handler: (record, schemas, $component) => {
        $this.browse($this.path)
      }
    },
    // general
    {
      id: 'add',
      permission: 2,
      color: 'primary',
      scopes: ['index', 'create', 'view', 'edit'],
      positions: ['floating'],
      round: true,
      icon: 'add',
      label: '',
      tooltip: 'Inicie a criação de um novo registro',
      handler: (record, schemas, $component) => {
        $this.browse($this.path + '/' + 'create')
      }
    },
    {
      id: 'back',
      permission: 1,
      color: 'white',
      scopes: ['index', 'create', 'view', 'edit'],
      positions: ['top', 'bottom'],
      icon: '',
      label: 'Voltar',
      tooltip: 'Voltar para a tela anterior',
      handler: (record, schemas, $component) => {
        window.history.back()
      }
    }
  ]
}

/**
 * @param {Vue} $this
 * @param {*} actions
 * @returns {Array}
 */
export const actions = ($this, actions) => {
  if (Array.isArray(actions)) {
    return actions
  }
  if (typeof actions === 'function') {
    return actions($this, buttons($this))
  }
  return buttons($this)
}
