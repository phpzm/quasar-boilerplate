import { logout } from 'src/domains/@modules/auth/services'

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
        logout(() => {
          $component.$router.push('/auth/login')
        })
      }
    }
  ]
}
