import { entity, title, grid, form } from 'src/domains/auth/user/model'
import { crud } from 'src/infra/router/resources'

export default crud(entity, title, grid, form)
