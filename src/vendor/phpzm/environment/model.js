import field from 'src/bootstrap/configure/field'
import grid from 'src/bootstrap/configure/grid'
import form from 'src/bootstrap/configure/form'

/**
 * @param {Object} environment
 */
export default (environment) => {
  environment.set('field', field)
  environment.set('grid', grid)
  environment.set('form', form)
}
