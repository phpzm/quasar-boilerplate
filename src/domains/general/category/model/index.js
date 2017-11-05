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
export const title = 'Cadastro de Categorias'

/**
 * @type {string}
 */
export const tooltip = 'Categorias são usadas para classificar conteúdos'

/**
 * @type {string}
 */
export const api = '/general/category'

/**
 * @type {string}
 */
export const path = '/dashboard/general/category'

/**
 * @type {string}
 */
export const namespace = 'general.category'

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
export const menu = model.menu(icon, label, path, false, 'Você não tem acesso a esse menu!')

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
    paginate: true,
    schemas: fields(scope, route),
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
 * @param {Route} route
 * @returns {Array}
 */
export const fields = (scope, route = null) => {
  return model.filter(
    [
      model.field('id', 'Código').$in('index').$grid({width: 10}).$link(path + '/{id}').$render(),
      model.field('name', 'Nome').$form({icon: 'home', helper: 'Help me!', count: 100}).$validate('required').$render(),
      model.field('~', 'Dados').$separator().$render(),
      model.field('email', 'E-mail').$filter().$grid({width: 20}).$validate('required').$render(),
      model.field('telephone', 'Telefone').$phone().$grid({width: 10}).$form({width: 50}).$validate('required').$render(),
      model.field('amount', 'Valor').$money().$grid({width: 10}).$form({width: 50}).$validate('required').$render()
    ],
    scope
  )
}
