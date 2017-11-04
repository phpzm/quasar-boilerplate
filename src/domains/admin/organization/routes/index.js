import { path, namespace, grid, form, meta, id } from 'src/domains/admin/organization/model'
import { crud } from 'src/app/infra/router/resources'

export default crud(path, namespace, grid, form, meta, id)
