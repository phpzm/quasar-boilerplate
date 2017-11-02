/**
 * @param {Function} props
 * @param {string} path
 * @param {string} uri
 * @param {string} scope
 * @param {string} component
 * @param {string} label
 * @param {string} icon
 * @param {string} tooltip
 * @returns {Object}
 */
export const route = (props, path, uri, scope, component, label = '', icon = '', tooltip = '') => {
  return {
    path: uri,
    component: component,
    name: String(path).replace(/\\/g, '.') + '.' + scope,
    props: (route) => {
      return props(scope, route)
    },
    meta: {
      icon: icon,
      label: label,
      tooltip: tooltip
    }
  }
}

/**
 * @param {string} path
 * @param {Function} grid
 * @param {Function} form
 * @param {Object} meta
 * @param {string} components
 * @returns {Array}
 */
export const crud = (path, grid, form, meta, components = 'themes/phpzm/components/crud') => {
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
        route(grid, path, '', 'index', components + '/Grid', '', '', meta.tooltip),
        route(form, path, 'create', 'create', components + '/Form', 'Criar', 'add', create),
        route(form, path, ':id', 'view', components + '/Form', 'Visualizar', 'search', view),
        route(form, path, ':id/edit', 'edit', components + '/Form', 'Editar', 'edit', edit)
      ]
    }
  ]
}
