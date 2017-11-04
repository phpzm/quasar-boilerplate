import model from 'src/app/support/model'
import { resource } from 'src/app/infra/services/http/resource'

/**
 * @type {string}
 */
export const icon = 'store_mall_directory'

/**
 * @type {string}
 */
export const label = 'Organizações'

/**
 * @type {string}
 */
export const api = '/admin/organization'

/**
 * @type {string}
 */
export const id = '_id'

/**
 * @type {Object}
 */
export const reference = {
  value: 'org_codigo',
  label: 'org_nome'
}

/**
 * @type {string}
 */
export const path = '/dashboard/admin/organization'

/**
 * @type {Resource}
 */
export const service = resource(api)

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, 'Cadastro de Organizações')

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
      model.field('org_codigo', 'Código').$pk().$render(),
      model.field('org_nome', 'Nome').$filter().$required().$render(),
      model.field('org_descricao', 'Descrição').$filter().$textarea().$render()
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
