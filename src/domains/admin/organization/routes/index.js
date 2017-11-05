import { path, namespace, grid, form, meta, id } from 'src/domains/admin/organization/model'
import { route, factory, child, base as components } from 'src/app/infra/router/resources'

const resources = factory(path, namespace, grid, form, meta)

export default [
  route(path, '', components + '/Index', {title: meta.label}, meta, [
    child(path, namespace, grid, '', 'index', components + '/Grid', resources.$read()),
    child(path, namespace, form, 'create', 'create', components + '/Form', resources.$create()),
    child(path, namespace, form, ':' + id, 'view', components + '/Form', resources.$view()),
    child(path, namespace, form, ':' + id + '/edit', 'edit', components + '/Form', resources.$edit())
  ])
]
