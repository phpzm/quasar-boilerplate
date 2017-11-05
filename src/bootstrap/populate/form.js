import { $body } from 'src/app/infra/services/http/resource'

/**
 * @param {AppCrudForm} $component
 * @param {AxiosResponse} response
 * @param {Function} callback
 */
export default ($component, response, callback = null) => {
  let body = $body(response)
  if (!Array.isArray(body)) {
    $component.data = {}
    return
  }
  $component.data = body[0]

  if (typeof callback === 'function') {
    callback()
  }
}
