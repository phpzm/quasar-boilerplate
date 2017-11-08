import { path, namespace, grid, form, meta, id } from '../model'
import { crud } from 'src/app/infra/router/resources'

export default crud(path, namespace, grid, form, meta, id)
