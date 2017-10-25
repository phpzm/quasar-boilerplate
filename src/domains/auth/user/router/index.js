import { entity, grid, form, title, icon } from 'src/domains/auth/user/model'
import { crud } from 'src/infra/router/resources'

export default crud(entity, grid, form, title, icon)
