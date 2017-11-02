import { confirm } from 'src/app/support/message/index'
import { url } from 'src/app/infra/services/http/resource'

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

/**
 * @param {Object} $this
 * @param {string} id
 * @return {Array}
 */
export const buttons = ($this) => {
  return [
    {
      id: 'view',
      permission: 1,
      color: 'white',
      scopes: ['index', 'create', 'view', 'edit'],
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
      scopes: ['index', 'create', 'view', 'edit'],
      positions: ['middle'],
      icon: 'delete',
      label: 'Apagar',
      tooltip: 'Apague este registro',
      handler: (record, schemas, $component) => {
        confirm('Confirmação', 'Deseja apagar este registro?', () => {
          $this.remove(record[$this.id])
        })
      }
    },
    {
      id: 'add',
      permission: 2,
      color: 'primary',
      scopes: ['index'],
      positions: ['floating'],
      icon: 'add',
      label: '',
      tooltip: 'Navegue para a tela a fim de criar um novo registro',
      handler: (record, schemas, $component) => {
        $component.navigate(url($this.path, 'create', $component.$route.query))
      }
    },
    {
      id: 'save',
      permission: 2,
      color: 'primary',
      scopes: ['create', 'view', 'edit'],
      positions: ['top', 'bottom'],
      disabled: (valid) => {
        return !valid
      },
      hidden: $this.scope !== 'create',
      icon: '',
      label: 'Salvar',
      handler: (record, schemas, $component) => {
        $this.save(record)
      }
    },
    {
      id: 'back',
      permission: 1,
      color: 'primary',
      outline: true,
      scopes: ['index', 'create', 'view', 'edit'],
      positions: ['top', 'bottom'],
      icon: '',
      label: 'Voltar',
      handler: (record, schemas, $component) => {
        window.history.back()
      }
    },
    {
      id: 'create',
      permission: 2,
      color: 'primary',
      scopes: ['index'],
      positions: ['begin'],
      icon: '',
      label: 'Criar um novo registro',
      handler: (record, schemas, $component) => {
        $component.navigate(url($this.path, 'create', $component.$route.query))
      }
    },
    {
      id: 'retry',
      permission: 2,
      color: 'primary',
      scopes: ['index'],
      positions: ['retry'],
      icon: '',
      label: 'Tentar novamente',
      handler: (record, schemas, $component) => {
        $this.fetchAll()
      }
    }
  ]
}
