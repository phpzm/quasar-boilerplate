import model from 'src/app/support/model'
import { resource, source } from 'src/app/infra/services/http/resource'
import { button } from 'src/app/modules/dashboard'
import 'src/domains/general/slots/MyLink'
import { PATH_HOME } from 'src/app/support/index'

/**
 * @type {string}
 */
export const icon = 'account_balance'

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
export const description = 'Organizações são grupos que existem dentro da sua Instituição. Ex.: Casa, Escritório, Filial de New York'

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
 * @type {Object}
 */
export const sources = source(api, 'id', 'name')

/**
 * @param {Vue} $this
 * @param {Array} actions
 */
const actions = ($this, actions) => {
  // const permission = (record, $component, $user) => record && String(record['id']) === '2'
  const permission = record => record && String(record['id']) === '1'

  const home = () => $this.$router.push(PATH_HOME)

  // id, permission, label, handler, icon = '', tooltip = '', color = 'white'
  const custom = button('go-home', 1, 'Início', home, 'store', 'Voltar para a Página Inicial', 'warning')
    .$options({permission, rotate: false, raised: true}).$form() // , round: true, outline: true

  actions.unshift(custom)

  return actions.map(button => {
    if (button.id === 'destroy') {
      // override the access control system
      button.permission = permission
    }
    return button
  })
}

/**
 * @type {Array}
 */
const slots = []

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  // you can add settings default to grid in src/bootstrap/configure/grid
  const options = {
    slots: slots,
    position: 'right',
    top: true,
    bottom: false,
    styles: {
      height: 'calc(100vh - 235px)',
      minHeight: '280px'
    },
    bodyStyle: {
      height: 'calc(100vh - 285px)',
      minHeight: '230px'
    },
    debug: false
  }

  return model.grid(service, path, id, fields('index', route), filters(scope, route), actions, options)
}

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const form = (scope, route) => {
  return model.form(service, scope, path, id, fields(scope, route), actions)
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
