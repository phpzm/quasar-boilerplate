import { $body } from 'src/bootstrap/configure/http'
import '../components/ActivateButton'

/**
 * @param service
 * @returns {*|Object}
 */
export const activate = (service) => {
  return {
    field: 'name',
    component: 'ActivateButton',
    on: {
      click (record, schemas, $component, $slot) {
        execute(service, record, $slot)
      }
    }
  }
}

export const execute = (service, record, $slot) => {
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
