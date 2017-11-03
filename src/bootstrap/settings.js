import store from 'src/app/infra/store'
import { confirm } from 'src/app/support/message/index'
import { first } from 'src/app/infra/services/http/resource'

import menu from 'src/bootstrap/model/menu'
import options from 'src/bootstrap/model/options'

/**
 * @param {string} path
 * @param {Object} query
 * @returns {{path: *, query: {}}}
 */
export const to = (path, query = {}) => {
  return {
    path: path,
    query: query
  }
}

/**
 * @param {Vue} $component
 */
export const configureDashboard = ($component) => {
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setAppMenu', menu(to))
  // noinspection JSIgnoredPromiseFromCall
  store.dispatch('setDashboardOptions', options())
}

/**
 * @param {Object} $this
 * @param {string} id
 * @return {Array}
 */
export const configureButtons = ($this) => {
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
      color: 'white',
      scopes: ['create', 'view', 'edit'],
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
      color: 'white',
      scopes: ['index'],
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

/**
 * @param {Vue} $component
 * @param {AxiosResponse} response
 * @returns {Array}
 */
export const populateGrid = ($component, response) => {
  const {body, meta} = response.data
  if (!Array.isArray(body)) {
    return []
  }
  let data = body
  if ($component.isPaginated()) {
    // noinspection JSUndefinedPropertyAssignment
    $component.page = parseInt(meta.page)
    // noinspection JSUndefinedPropertyAssignment
    $component.pages = parseInt(meta.last)
  }
  // noinspection JSUndefinedPropertyAssignment
  $component.data = data
}

/**
 * @param {Vue} $component
 * @param {AxiosResponse} response
 * @param {Function} callback
 */
export const populateForm = ($component, response, callback = null) => {
  let data = {}
  const {body} = response.data
  if (Array.isArray(body)) {
    data = body[0]
  }
  // noinspection JSUndefinedPropertyAssignment
  $component.data = data
  if (typeof callback === 'function') {
    callback()
  }
}

/**
 * @param {Object} user
 * @returns {*}
 */
export const configureUser = (user) => {
  return user
}

/**
 * @param {AxiosRequestConfig} config
 * @returns {AxiosRequestConfig}
 */
export const httpRequest = (config) => {
  return config
}

/**
 * @param {AxiosResponse} response
 * @returns {AxiosResponse}
 */
export const httpResponse = (response) => {
  return response
}

/**
 * @param {AxiosError} error
 * @param {AppRouter} router
 * @param {AppStore} store
 * @returns {AxiosError}
 */
export const httpError = (error, router, store) => {
  return error
}
