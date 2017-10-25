/**
 * @param {Function} props
 * @param {string} entity
 * @param {string} scope
 * @param {string} path
 * @param {string} component
 * @param {string} label
 * @param {string} icon
 * @param {string} tooltip
 * @returns {Object}
 */
export const route = (props, entity, scope, path, component, label = '', icon = '', tooltip = '') => {
  return {
    path: path,
    component: component,
    name: entity + '.' + scope,
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
 * @param {string} entity
 * @param {Function} grid
 * @param {Function} form
 * @param {Object} meta
 * @returns {Array}
 */
export const crud = (entity, grid, form, meta) => {
  return [
    {
      path: entity,
      component: 'app/common/crud/Index',
      props: {
        title: meta.label
      },
      meta: meta,
      children: [
        route(grid, entity, 'index', '', 'app/common/crud/Grid'),
        route(form, entity, 'create', 'create', 'app/common/crud/Form', 'Criar', 'add',
          'Cria um novo registro no(a) ' + meta.tooltip),
        route(form, entity, 'view', ':id', 'app/common/crud/Form', 'Visualizar', 'search',
          'Visualiza um registro do(a) ' + meta.tooltip),
        route(form, entity, 'edit', ':id/edit', 'app/common/crud/Form', 'Editar', 'edit',
          'Edita um novo registro do(a) ' + meta.tooltip)
      ]
    }
  ]
}
