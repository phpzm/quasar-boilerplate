import { path, grid, form, meta } from 'src/domains/admin/user/model/index'
import { crud } from 'src/app/infra/router/resources'

export default crud(path, grid, form, meta)
