import permission from 'src/bootstrap/configure/permission'
import user from 'src/bootstrap/configure/user'
import token from 'src/bootstrap/configure/token'

/**
 * @param {Object} environment
 */
export default (environment) => {
  environment.set('permission', permission)
  environment.set('user', user)
  environment.set('token', token)
}
