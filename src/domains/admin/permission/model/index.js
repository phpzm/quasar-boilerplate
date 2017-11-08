import model from 'src/app/support/model'
import { resource } from 'src/app/infra/services/http/resource'
import { activate } from 'src/domains/general/slots/activate/services/activate'

/**
 * @type {string}
 */
export const icon = 'lock_outline'

/**
 * @type {string}
 */
export const label = 'Permissões'

/**
 * @type {string}
 */
export const title = 'Cadastro de Permissões'

/**
 * @type {string}
 */
export const tooltip = 'Define as permissões que poderão ser usadas pelos usuários'

/**
 * @type {string}
 */
export const description = ''

/**
 * @type {string}
 */
export const api = '/admin/permission'

/**
 * @type {string}
 */
export const id = 'id'

/**
 * @type {string}
 */
export const path = '/dashboard/admin/permission'

/**
 * @type {string}
 */
export const namespace = 'admin.permission'

/**
 * @type {Resource}
 */
export const service = resource(api)

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, title, tooltip)

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, false, tooltip, namespace, namespace, 4)

// configure buttons
/**
 * @type {Function}
 * @param {AppCrudFrom|AppCrudGrid} $this
 * @param actions
 */
const actions = ($this, actions) => {
  const map = button => {
    if (['update'].includes(button.id)) {
      // keep the access control system and add other validation layer
      button.access = (record, $component, $user) => {
        return record['id'] === 1
      }
    }
    return button
  }
  return actions.map(map)
}

/**
 * @type {Array}
 */
const slots = [
  activate(service)
]

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  return model.grid(service, path, id, fields('index', route), filters(scope, route), actions, {slots})
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const form = (scope, route) => {
  // service, scope, path, id, schemas, actions = null, options = {}
  return model.form(service, scope, path, id, fields(scope, route), actions, {debug: true})
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Array}
 */
export const fields = (scope, route = null) => {
  return model.filter(
    [
      model.field('id', 'Código').$pk().$render(),
      model.field('name', 'Nome').$text().$filter().$required().$form({width: 70}).$render(),
      model.field('profile', 'Perfil').$required().$out('index').$form({width: 30}).$select(profiles, true).$render(),
      model.field('gender', 'Sexo').$required().$out('index').$form({width: 30}).$select(gender, false).$render()
    ],
    scope
  )
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Array}
 */
export const filters = (scope, route = null) => {
  return []
}

/**
 * @type {Array}
 */
export const profiles = [
  {label: 'Geral', value: 'general'},
  {label: 'Atendimento', value: 'support'},
  {label: 'Financeiro', value: 'financial'},
  {label: 'Contabilidade', value: 'accountant'}
]

/**
 * @type {Array}
 */
export const gender = [
  {label: 'Masculino', value: 'M'},
  {label: 'Feminino', value: 'F'}
]
