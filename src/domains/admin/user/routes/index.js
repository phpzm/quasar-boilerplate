import { path, namespace, grid, form, meta, id } from 'src/domains/admin/user/model'
import { crud } from 'phpzm/infra/router/resources'

export default crud(path, namespace, grid, form, meta, id)
