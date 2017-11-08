import { $body } from 'src/bootstrap/configure/http'
import { button } from 'src/app/modules/dashboard'

/**
 * @param service
 * @returns {*|Object}
 */
export const activate = (service) => {
  // go to home
  const home = (record, columns, $component, action) => {
    // $this.$router.push(PATH_HOME)
    runButton(service, record, action)
  }
  // id, permission, label, handler, icon = '', tooltip = '', color = 'white'
  return button('go-home', 1, 'Ativo', home, 'store', 'Voltar para a Página Inicial', 'green')
    .$options({rotate: false, raised: true}).$all(['middle', 'top', 'bottom']) // , round: true, outline: true
}

export const runButton = (service, record, action) => {
  service
    .post({id: record['id'], active: false}, 'activate')
    .then((response) => {
      const data = $body(response)
      if (data.status) {
        action.label = 'Ativo'
        action.color = 'green'
      }
    })
    .catch(() => {
      action.label = 'Inativo'
      action.color = 'red'
    })
}

export const runSlot = (service, record, $slot) => {
  service
    .post({active: false}, 'activate/' + record['id'])
    .then((response) => {
      const data = $body(response)
      if (data.status) {
        $slot.setActive()
      }
    })
    .catch(() => {
      $slot.setInactive()
    })
}
