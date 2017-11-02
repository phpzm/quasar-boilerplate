import { path, grid, form, meta } from 'src/domains/general/category/model'
import { crud } from 'src/app/infra/router/resources'

export default crud(path, grid, form, meta)
