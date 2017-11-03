/**
 * @param {Vue} $component
 * @param {AxiosResponse} response
 * @returns {Array}
 */
export default ($component, response) => {
  const {body, meta} = response.data
  if (!Array.isArray(body)) {
    return []
  }
  let data = body
  if ($component.isPaginated()) {
    // noinspection JSUndefinedPropertyAssignment
    $component.page = parseInt(meta.page)
    // noinspection JSUndefinedPropertyAssignment
    $component.pages = parseInt(meta.last)
  }
  // noinspection JSUndefinedPropertyAssignment
  $component.data = data
}
