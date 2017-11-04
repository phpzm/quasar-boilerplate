import model from 'src/app/support/model'
import { resource } from 'src/app/infra/services/http/resource'
import { reference, path as organization } from 'src/domains/admin/organization/model'

/**
 * @type {string}
 */
export const icon = 'supervisor_account'

/**
 * @type {string}
 */
export const label = 'Usuários'

/**
 * @type {string}
 */
export const api = '/admin/user'

/**
 * @type {string}
 */
export const id = '_id'

/**
 * @type {string}
 */
export const path = '/dashboard/admin/user'

/**
 * @type {Resource}
 */
export const service = resource(api)

/**
 * @type {Object}
 */
export const pivot = model.pivot(organization, reference, 'oru_cod_ORGANIZACAO')

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, 'Cadastro de Usuários')

/**
 * @type {Function}
 */
export const menu = model.menu(icon, label, path)

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  return {
    id: id,
    service: service,
    path: path,
    rule: 'like',
    pagination: true,
    search: true,
    schemas: fields('index'),
    filters: filters(scope, route),
    actions: ($this, actions) => {
      return actions
    },
    debug: true
  }
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const form = (scope, route) => {
  return {
    id: id,
    service: service,
    path: path,
    scope: scope,
    schemas: fields(scope),
    actions: ($this, actions) => {
      return actions
    },
    debug: true
  }
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Array}
 */
export const fields = (scope, route = null) => {
  return model.filter(
    [
      model.field('usr_codigo', 'Código').$pk().$render(),
      model.field('usr_nome', 'Nome').$text().$filter().$required().$form({width: 70}).$render(),
      model.field('usr_perfil', 'Perfil').$required().$form({width: 30})
        .$select('list', [
          {label: 'Geral', value: 'general'},
          {label: 'Atendimento', value: 'support'},
          {label: 'Financeiro', value: 'financial'},
          {label: 'Contabilidade', value: 'accountant'}
        ]).$render(),
      model.field('usr_email', 'E-mail').$text().$required().$form({width: 50}).$render(),
      model.field('usr_password', 'Senha').$password().$required(scope === 'create')
        .$scopes(['create', 'edit']).$form({width: 50}).$render(),
      model.field('usr_organizacoes', 'Organizações').$required().$out('index')
        .$form({width: 50, placeholder: '.: Selecione as Organizações :.'})
        .$pivot(pivot).$render(),
      model.field('usr_telefone', 'Telefone').$phone().$out('index').$form({width: 25}).$render(),
      model.field('usr_celular', 'Celular').$phone().$out('index').$form({width: 25}).$render()
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
  return [
    model.field('_created_at', 'Cadastro').$date().$render()
  ]
}
