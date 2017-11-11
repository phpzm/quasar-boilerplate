import configureCrud from 'src/bootstrap/configure/crud'
import { route, factory, child } from 'genesis/infra/router/resources'
import { path, namespace, grid, form, meta, label, id } from 'src/domains/admin/organization/model'

const resources = factory(path, namespace, grid, form, meta)

export default [
  route(path, '', configureCrud('Index'), {title: label}, meta, [
    child(path, namespace, grid, '', 'index', configureCrud('Grid'), resources.$read()),
    child(path, namespace, form, 'create', 'create', configureCrud('Form'), resources.$create()),
    child(path, namespace, form, ':' + id, 'view', configureCrud('Form'), resources.$view()),
    child(path, namespace, form, ':' + id + '/edit', 'edit', configureCrud('Form'), resources.$edit())
  ])
]
