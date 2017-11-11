import { $body } from 'src/bootstrap/configure/http'
import { getDotNotation } from 'genesis/support/transform'

/**
 * @param {AppCrudForm} $component
 * @param {AxiosResponse} response
 * @param {Function} callback
 */
export default ($component, response, callback = null) => {
  let body = $body(response)
  if (!Array.isArray(body)) {
    $component.data = getDotNotation($component.fields, body)
    return
  }
  $component.data = getDotNotation($component.fields, body[0])

  if (typeof callback === 'function') {
    callback()
  }
}
