import model from 'src/app/support/model'
import { resource } from 'src/app/infra/services/http/resource'
import { PATH_HOME } from 'src/app/support/index'
import { button } from 'src/app/modules/dashboard'
import '../slots/MyLink'
import '../slots/MyButton'

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
 * @type {Function}
 */
export const card = model.card(icon, label, path, tooltip, description, 50)

/**
 * @param {Vue} $this
 * @param {Array} actions
 */
const actions = ($this, actions) => {
  // permission handler
  const permission = (record, $component, $user) => record && String(record['id']) === '1'
  // go to home
  const home = () => $this.$router.push(PATH_HOME)
  // id, permission, label, handler, icon = '', tooltip = '', color = 'white'
  const custom = button('go-home', 1, 'Início', home, 'store', 'Voltar para a Página Inicial', 'purple')
    .$options({permission, rotate: false, raised: true}).$form() // , round: true, outline: true
  // add new button
  actions.unshift(custom)
  // change permission of destroy button
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
const slots = [
  {
    field: 'id',
    component: 'MyLink',
    props: {
      path: '/path/{id}/{name}'
    }
  },
  {
    field: 'name',
    component: 'MyButton',
    on: {
      click (record, schemas, $component) {
        console.log('Clicou!')
      }
    }
  }
]

/**
 * @param {string} scope
 * @param {Route} route
 * @returns {Object}
 */
export const grid = (scope, route) => {
  const options = {
    slots: slots,
    bottom: false,
    styles: {
      height: 'calc(100vh - 220px)',
      minHeight: '280px'
    },
    bodyStyle: {
      height: 'calc(100vh - 270px)',
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
