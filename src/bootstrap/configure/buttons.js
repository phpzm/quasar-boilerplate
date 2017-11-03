import { confirm } from 'src/app/support/message/index'
import { first } from 'src/app/infra/services/http/resource'

const color = 'positive'

/**
 * @param {Object} $this
 * @return {Array}
 */
export default ($this) => {
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
      id: 'add-inline',
      permission: 2,
      color: 'primary',
      scopes: ['index'],
      positions: ['top', 'bottom'],
      icon: 'add',
      tooltip: 'Inicie a criação de um novo registro',
      handler: (record, schemas, $component) => {
        $this.browse($this.path + '/' + 'create')
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
      id: 'editing',
      permission: 2,
      color: 'white',
      scopes: ['view'],
      positions: ['top', 'bottom'],
      label: 'Editar',
      tooltip: 'Edite este registro',
      handler: (record, schemas, $component) => {
        $this.browse($this.path + '/' + record[$this.id] + '/' + 'edit')
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
        $this.$router.go(-1)
      }
    },
    // last buttons
    {
      id: 'start',
      permission: 1,
      color: color,
      scopes: ['create', 'view', 'edit'],
      rotate: false,
      positions: ['top', 'bottom'],
      icon: 'subject',
      label: '',
      tooltip: 'Abre a lista de registros',
      handler: (record, schemas, $component) => {
        $this.browse($this.path, false)
      }
    },
    {
      'class': '--button-filter',
      id: 'filter',
      permission: 1,
      color: color,
      scopes: ['index'],
      rotate: false,
      positions: ['top', 'bottom'],
      icon: 'filter_list',
      label: '',
      tooltip: 'Abre o painel de filtros',
      handler: (record, schemas, $component) => {
        $this.filterOpen()
      }
    }
  ]
}
