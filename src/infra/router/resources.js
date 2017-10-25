/**
 * @param {Function} props
 * @param {string} entity
 * @param {string} scope
 * @param {string} path
 * @param {string} component
 * @param {string} label
 * @param {string} icon
 * @returns {Object}
 */
export const route = (props, entity, scope, path, component, label, icon) => {
  return {
    path: path,
    component: component,
    name: entity + '.' + scope,
    props: (route) => {
      return props(scope, route)
    },
    meta: {
      icon: icon,
      label: label
    }
  }
}

/**
 * @param {string} entity
 * @param {Function} grid
 * @param {Function} form
 * @param {string} title
 * @param {string} icon
 * @returns {Array}
 */
export const crud = (entity, grid, form, title, icon) => {
  return [
    {
      path: entity,
      component: 'app/common/crud/Index',
      props: {
        title: title
      },
      meta: {
        label: title,
        icon: icon
      },
      children: [
        route(grid, entity, 'index', '', 'app/common/crud/Grid', '', ''),
        route(form, entity, 'create', 'create', 'app/common/crud/Form', 'Criar', 'add'),
        route(form, entity, 'view', ':id', 'app/common/crud/Form', 'Visualizar', 'search'),
        route(form, entity, 'edit', ':id/edit', 'app/common/crud/Form', 'Editar', 'edit')
      ]
    }
  ]
}
