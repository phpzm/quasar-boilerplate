import model from 'src/app/support/model'
import { resource } from 'src/app/infra/services/http/resource'
import { reference, api as organization } from 'src/domains/admin/organization/model'
import '../slots/MyLink'

/**
 * @type {string}
 */
export const icon = 'people'

/**
 * @type {string}
 */
export const label = 'Usuários'

/**
 * @type {string}
 */
export const title = 'Cadastro de Usuários'

/**
 * @type {string}
 */
export const tooltip = 'Defina quais usuários terão acesso a sua aplicação e gerencie-os'

/**
 * @type {string}
 */
export const description = 'Adicione e gerencie Usuários no sistema e defina como se comportam'

/**
 * @type {string}
 */
export const api = '/admin/user'

/**
 * @type {string}
 */
export const id = 'id'

/**
 * @type {string}
 */
export const path = '/dashboard/admin/user'

/**
 * @type {string}
 */
export const namespace = 'admin.user'

/**
 * @type {Resource}
 */
export const service = resource(api)

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, title, tooltip)

/**
 * @type {Object}
 */
export const pivot = model.pivot(organization, reference, 'organization_id')

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path, false, tooltip, namespace)

/**
 * @type {Function}
 */
export const card = model.card(icon, label, path, tooltip, description, 50)

// configure buttons
const actions = ($this, actions) => {
  const map = button => {
    if (['edit', 'destroy'].includes(button.id)) {
      // keep the access control system and add other validation layer
      button.access = (record, $component, $user) => {
        return record && String(record['id']) !== '2'
      }
    }
    return button
  }
  return actions.map(map)
}

const slots = [
  {
    field: 'id',
    component: 'MyLink',
    props: {
      path: '/path/{id}/{name}'
    },
    on: {
      click (record, schemas, $component) {
        console.log('Clicou!')
      }
    }
  }
]

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  return model.grid(service, path, id, fields('index', route), filters(scope, route), actions, {
    slots,
    position: 'right'
  })
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const form = (scope, route) => {
  return model.form(service, scope, path, id, fields(scope, route))
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
      model.field('profile', 'Perfil').$required().$out('index').$form({width: 30})
        .$select('list', [
          {label: 'Geral', value: 'general'},
          {label: 'Atendimento', value: 'support'},
          {label: 'Financeiro', value: 'financial'},
          {label: 'Contabilidade', value: 'accountant'}
        ]).$render(),
      model.field('email', 'E-mail').$text().$filter().$required().$form({width: 50}).$render(),
      model.field('password', 'Senha').$password().$required(scope === 'create')
        .$scopes(['create', 'edit']).$form({width: 50}).$render(),
      model.field('organizations', 'Organizações').$required().$out('index')
        .$form({width: 50, placeholder: '.: Selecione as Organizações :.'})
        .$pivot(pivot).$render()
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
