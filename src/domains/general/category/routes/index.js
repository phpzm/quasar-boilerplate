import { path, namespace, grid, form, meta } from 'src/domains/general/category/model'
import { crud } from 'phpzm/infra/router/resources'

export default crud(path, namespace, grid, form, meta)
