import model from 'src/app/support/model/index'
import { resource } from 'src/app/infra/services/http/resource'

/**
 * @type {string}
 */
export const icon = 'extension'

/**
 * @type {string}
 */
export const label = 'Categorias'

/**
 * @type {string}
 */
export const api = '/general/category'

/**
 * @type {string}
 */
export const path = '/dashboard/general/user'

/**
 * @type {Resource}
 */
export const service = resource(api)

/**
 * @type {Object}
 */
export const meta = model.meta(icon, label, 'Cadastro de Categorias')

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
    service,
    path,
    pagination: true,
    search: true,
    schemas: fields('index')
  }
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const form = (scope, route) => {
  return {
    service,
    path,
    scope: scope,
    schemas: fields(scope),
    actions: ($this, actions) => {
      return actions
    }
  }
}

/**
 * @param {string} scope
 * @returns {Array}
 */
export const fields = (scope) => {
  return model.filter(
    [
      model.field('id', 'Código', '').$in('index').$grid({width: 10}).$render(),
      model.field('name', 'Nome', 'field-text').$form({width: 50}).$validate('required').$render(),
      model.field('aaa', 'aaa', 'field-text').$form({width: 50}).$validate('required').$render(),
      model.field('bbb', 'bbb', 'field-text').$form({width: 50}).$validate('required').$render(),
      model.field('ccc', 'ccc', 'field-text').$form({width: 50}).$validate('required').$render()
    ],
    scope
  )
}
