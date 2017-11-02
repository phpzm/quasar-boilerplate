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
export const path = '/dashboard/general/category'

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
 * @type {string}
 */
export const component = 'quasar'

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  return {
    service,
    path,
    component,
    pagination: true,
    search: true,
    schemas: fields('index'),
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
    service,
    path,
    component,
    scope: scope,
    schemas: fields(scope),
    debug: true
  }
}

/**
 * @param {string} scope
 * @returns {Array}
 */
export const fields = (scope) => {
  return model.filter(
    [
      model.field('id', 'Código').$in('index').$grid({width: 10}).$link(path + '/{id}').$render(),
      model.field('name', 'Nome').$grid({width: 30}).$form({width: 50}).$validate('required').$render(),
      model.field('~', 'Dados').$separator().$render(),
      model.field('email', 'E-mail').$grid({width: 20}).$validate('required').$render(),
      model.field('telephone', 'Telefone').$phone().$grid({width: 10}).$form({width: 50}).$validate('required').$render(),
      model.field('amount', 'Valor').$money().$grid({width: 10}).$form({width: 50}).$validate('required').$render()
    ],
    scope
  )
}
