import store from 'src/app/infra/store/index'
import { logout } from 'src/domains/auth/credential/services/index'

export default () => {
  return [
    {
      icon: 'person',
      label: 'Minha Conta',
      handler ($component) {
        $component.$router.push('/auth/me')
      }
    },
    {
      icon: 'power_settings_new',
      label: 'Sair',
      handler ($component) {
        logout(store.getters.AppUser).then(response => {
          $component.$router.push('/auth/login')
        })
      }
    }
  ]
}
