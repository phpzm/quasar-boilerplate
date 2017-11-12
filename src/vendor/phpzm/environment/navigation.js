import path from 'src/bootstrap/configure/path'

import drawer from 'src/bootstrap/menus/drawer'
import options from 'src/bootstrap/menus/options'

export default (environment) => {
  environment.set('path', path)
  environment.set('drawer', drawer(path))
  environment.set('options', options(path))
}
