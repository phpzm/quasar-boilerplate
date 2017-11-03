/**
 * @param {Vue} $component
 * @param {AxiosResponse} response
 * @param {Function} callback
 */
export default ($component, response, callback = null) => {
  let data = {}
  const {body} = response.data
  if (Array.isArray(body)) {
    data = body[0]
  }
  // noinspection JSUndefinedPropertyAssignment
  $component.data = data
  if (typeof callback === 'function') {
    callback()
  }
}
