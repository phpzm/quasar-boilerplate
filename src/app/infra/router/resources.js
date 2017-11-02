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
export const crud = (path, grid, form, meta, components = 'crud') => {
  const create = 'Cria um novo registro no(a) ' + meta.tooltip
  const view = 'Visualiza um registro do(a) ' + meta.tooltip
  const edit = 'Edita um novo registro do(a) ' + meta.tooltip
  return [
    {
      path: path,
      component: 'app/components/crud/Index',
      props: {
        title: meta.label
      },
      meta: meta,
      children: [
        route(grid, path, '', 'index', 'app/components/' + components + '/Grid', '', '', meta.tooltip),
        route(form, path, 'create', 'create', 'app/components/' + components + '/Form', 'Criar', 'add', create),
        route(form, path, ':id', 'view', 'app/components/' + components + '/Form', 'Visualizar', 'search', view),
        route(form, path, ':id/edit', 'edit', 'app/components/' + components + '/Form', 'Editar', 'edit', edit)
      ]
    }
  ]
}
