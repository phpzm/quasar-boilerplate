import { confirm } from 'src/app/support/message'
import { url } from 'src/app/infra/services/http/resource'

/**
 * @param {Object} $this
 * @param {string} id
 * @return {Array}
 */
export default ($this, id = 'id') => {
  const base = $this.path
  return [
    {
      id: 'details',
      permission: 1,
      color: 'white',
      scopes: ['index', 'create', 'view', 'edit'],
      positions: ['middle'],
      icon: 'search',
      label: 'Detalhes',
      handler: (record, schemas, $component) => {
        console.log($component.$options.name)
        $component.navigate(url(base, record[id], $component.$route.query))
      }
    },
    {
      id: 'add',
      permission: 2,
      color: 'primary',
      scopes: ['index'],
      positions: ['floating'],
      icon: 'add',
      handler: (record, schemas, $component) => {
        $component.navigate(url(base, 'create', $component.$route.query))
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
      handler: (record, schemas, $component) => {
        $component.navigate(url(base, `${record[id]}/edit`, $component.$route.query))
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
      id: 'destroy',
      permission: 3,
      color: 'negative',
      scopes: ['index', 'create', 'view', 'edit'],
      positions: ['middle'],
      icon: 'delete',
      label: 'Apagar',
      handler: (record, schemas, $component) => {
        confirm('Confirmação', 'Deseja apagar este registro?', () => {
          $this.remove(record[id])
        })
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
        $component.navigate(url(base, 'create', $component.$route.query))
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
