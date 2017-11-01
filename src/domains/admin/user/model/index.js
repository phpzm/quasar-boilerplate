import model from 'src/app/support/model/index'
import { resource } from 'src/app/infra/services/http/resource'

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
export const api = '/auth/user'
/**
 * @type {string}
 */
export const path = '/dashboard/user'
/**
 * @type {Resource}
 */
export const service = resource(api)
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
 * @returns {Array}
 */
export const fields = (scope) => {
  return model.filter(
    [
      model.field('id', 'Código', '').$in('index').$grid({width: 10}).$render(),
      model.field('name', 'Nome', 'field-text').$render(),
      model.field('email', 'E-mail', 'field-text').$render(),
      model.field('password', 'Senha', 'field-text').$form({type: 'password'}).$out('index').$render()
    ],
    scope
  )
}
/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  return {
    api: api,
    path: path,
    data: {
      pagination: true,
      search: true,
      schemas: fields('index'),
      actions: ($this, actions) => {
        return actions
      }
    }
  }
}
/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const form = (scope, route) => {
  return {
    api: api,
    path: path,
    data: {
      scope: scope,
      schemas: fields(scope),
      actions: ($this, actions) => {
        return actions
      }
    }
  }
}
