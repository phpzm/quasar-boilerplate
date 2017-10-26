import { entity, grid, form, meta } from 'src/domains/auth/user/model'
import { crud } from 'src/app/infra/router/resources'

export default crud(entity, grid, form, meta)
