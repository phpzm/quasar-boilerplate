import search from 'src/bootstrap/configure/search'
import grid from 'src/bootstrap/populate/grid'
import form from 'src/bootstrap/populate/form'

/**
 * @param {Object} environment
 */
export default (environment) => {
  environment.set('search', search)
  environment.set('grid', grid)
  environment.set('form', form)
}
