import { path, grid, form, meta, id } from 'src/domains/admin/organization/model'
import { crud } from 'src/app/infra/router/resources'

export default crud(path, grid, form, meta, id)
