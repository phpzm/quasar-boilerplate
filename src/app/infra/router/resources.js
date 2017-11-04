/**
 * @param {string} path
 * @param {string} name
 * @param {string} component
 * @param {Function} props
 * @param {Object} meta
 * @returns {Object}
 */
export const route = (path, name, component, props, meta) => ({path, name, component, props, meta})

/**
 * @param {string} path
 * @param {string} namespace
 * @param {Function} props
 * @param {string} uri
 * @param {string} scope
 * @param {string} component
 * @param {int} permission
 * @param {string} label
 * @param {string} icon
 * @param {string} tooltip
 * @returns {Object}
 */
export const child = (path, namespace, props, uri, scope, component, permission, label = '', icon = '',
  tooltip = '') => {
  return route(
    uri,
    namespace + '.' + scope,
    component,
    (route) => props(scope, route),
    {icon, label, tooltip, namespace, permission}
  )
}

/**
 * @param {string} path
 * @param {string} namespace
 * @param {Function} grid
 * @param {Function} form
 * @param {Object} meta
 * @param {string} id
 * @param {string} components
 * @returns {Array}
 */
export const crud = (path, namespace, grid, form, meta, id = 'id', components = 'themes/phpzm/components/crud') => {
  const create = 'Cria um novo registro no(a) ' + meta.tooltip
  const view = 'Visualiza um registro do(a) ' + meta.tooltip
  const edit = 'Edita um novo registro do(a) ' + meta.tooltip
  return [
    {
      path: path,
      component: components + '/Index',
      props: {
        title: meta.label
      },
      meta: meta,
      children: [
        child(path, namespace, grid, '', 'index', components + '/Grid', 1, '', '', meta.tooltip),
        child(path, namespace, form, 'create', 'create', components + '/Form', 2, 'Criar', 'add', create),
        child(path, namespace, form, ':' + id, 'view', components + '/Form', 1, 'Visualizar', 'search', view),
        child(path, namespace, form, ':' + id + '/edit', 'edit', components + '/Form', 3, 'Editar', 'edit', edit)
      ]
    }
  ]
}
