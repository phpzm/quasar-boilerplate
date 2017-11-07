import { $body, $meta } from 'src/bootstrap/configure/http'
import { getDotNotation } from 'src/app/support/transform'

/**
 * @param {AppCrudGrid} $component
 * @param {AxiosResponse} response
 */
export default ($component, response) => {
  if (!$component.isPaginated()) {
    let data = response
    if (!Array.isArray(data)) {
      data = $body(response)
    }
    $component.data = data
    return
  }

  const body = $body(response)
  const meta = $meta(response)

  if (!Array.isArray(body)) {
    $component.data = []
    return
  }

  $component.pages = parseInt(meta.last)
  $component.total = parseInt(meta.total)
  $component.data = body.map(record => getDotNotation($component.columns, record))
}
