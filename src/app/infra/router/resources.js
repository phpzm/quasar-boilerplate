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
      component: 'app/components/crud/Index',
      props: {
        title: meta.label
      },
      meta: meta,
      children: [
        route(grid, entity, 'index', '', 'app/components/crud/Grid', '', '', meta.tooltip),
        route(form, entity, 'create', 'create', 'app/components/crud/Form', 'Criar', 'add',
          'Cria um novo registro no(a) ' + meta.tooltip),
        route(form, entity, 'view', ':id', 'app/components/crud/Form', 'Visualizar', 'search',
          'Visualiza um registro do(a) ' + meta.tooltip),
        route(form, entity, 'edit', ':id/edit', 'app/components/crud/Form', 'Editar', 'edit',
          'Edita um novo registro do(a) ' + meta.tooltip)
      ]
    }
  ]
}
