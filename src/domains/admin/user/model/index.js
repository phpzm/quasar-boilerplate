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
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  return {
    service: service,
    path: path,
    pagination: true,
    search: true,
    schemas: fields('index'),
    actions: ($this, actions) => {
      return actions
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
    service: service,
    path: path,
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
      model.field('name', 'Nome').$render(),
      model.field('email', 'E-mail').$render(),
      model.field('password', 'Senha').$form({type: 'password'}).$out('index').$render()
    ],
    scope
  )
}
