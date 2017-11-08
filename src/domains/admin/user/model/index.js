import model from 'src/app/support/model'
import { resource, source } from 'src/app/infra/services/http/resource'
import { reference, api as organization } from 'src/domains/admin/organization/model'

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

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  return model.grid(service, path, id, fields('index', route), filters(scope, route), null)
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const form = (scope, route) => {
  const options = {
    tabs: [
      {
        name: 'principal',
        label: 'Principal'
      },
      {
        name: 'outros',
        label: 'Outros'
      }
    ],
    debug: true
  }
  // service, scope, path, id, schemas, actions = null, options = {}
  return model.form(service, scope, path, id, fields(scope, route), null, options)
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Array}
 */
export const fields = (scope, route = null) => {
  return model.filter(
    [
      model.field('id', 'Código').$pk().$tab('principal').$render(),
      model.field('name', 'Nome').$text().$tab('principal').$filter().$required().$form({width: 70}).$render(),
      // model.field('organization_id', 'Organização').$filter().$search(search).$required().$render(),
      model.field('organization_id', 'Organização').$filter().$tab('principal')
        .$form({source: source(organization, 'id', 'name'), width: 30}).$select().$required().$render(),
      model.field('profile', 'Perfil').$tab('principal').$required().$out('index').$form({width: 30}).$select(profiles, true).$render(),
      model.field('gender', 'Sexo').$tab('principal').$required().$out('index').$form({width: 30}).$select(gender, false).$render(),
      model.field('property.foo', 'Dot Notation').$tab('principal').$form({width: 40}).$filter().$text().$render(),
      model.field('email', 'E-mail').$tab('outros').$text().$filter().$required().$form({width: 50}).$render(),
      model.field('password', 'Senha').$tab('outros').$password().$required(scope === 'create')
        .$scopes(['create', 'edit']).$tab('outros').$form({width: 50}).$render(),
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
