import { $body, $meta, $extract, $first, httpError, httpRequest, httpResponse } from 'src/bootstrap/configure/http'

/**
 * @param {Object} environment
 */
export default (environment) => {
  environment.set('$body', $body)
  environment.set('$meta', $meta)
  environment.set('$extract', $extract)
  environment.set('$first', $first)
  environment.set('httpError', httpError)
  environment.set('httpRequest', httpRequest)
  environment.set('httpResponse', httpResponse)
}
