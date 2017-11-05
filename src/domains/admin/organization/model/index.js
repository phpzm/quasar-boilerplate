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
export const title = 'Cadastro de Organizações'

/**
 * @type {string}
 */
export const tooltip = 'Gerencie o organize o seu cadastro de Organizações'

/**
 * @type {string}
 */
export const api = '/admin/organization'

/**
 * @type {string}
 */
export const id = 'id'

/**
 * @type {Object}
 */
export const reference = {
  value: 'id',
  label: 'name'
}

/**
 * @type {string}
 */
export const path = '/dashboard/admin/organization'

/**
 * @type {string}
 */
export const namespace = 'admin.organization'

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
export const menu = model.menu(icon, label, path, false, tooltip, namespace)

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
    paginate: false,
    bottom: false,
    styles: {
      height: 'calc(100vh - 220px)',
      minHeight: '280px'
    },
    bodyStyle: {
      height: 'calc(100vh - 270px)',
      minHeight: '230px'
    },
    schemas: fields('index'),
    filters: filters(scope, route),
    actions: ($this, actions) => {
      return actions.map(button => {
        if (button.id === 'destroy') {
          button.permission = (record, $component, $user) => {
            return record && String(record['id']) === '2'
          }
        }
        return button
      })
    },
    debug: false
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
      model.field('id', 'Código').$pk().$render(),
      model.field('name', 'Nome').$filter().$required().$render(),
      model.field('address', 'Endereço').$filter().$textarea().$render(),
      model.field('telephone', 'Telefone').$phone().$out('index').$form({width: 25}).$render(),
      model.field('celular', 'Celular').$phone().$out('index').$form({width: 25}).$render()
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
