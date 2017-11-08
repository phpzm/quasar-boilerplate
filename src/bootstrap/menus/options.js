import { logout } from 'src/domains/@modules/auth/services'

export default () => {
  return [
    {
      icon: 'person',
      label: 'Minha Conta',
      /**
       * @param {AppLayout} $appLayout
       */
      handler ($appLayout) {
        $appLayout.$router.push('/auth/me')
      }
    },
    {
      icon: 'power_settings_new',
      label: 'Sair',
      /**
       * @param {AppLayout} $appLayout
       */
      handler ($appLayout) {
        logout(() => $appLayout.$router.push('/auth/login'))
      }
    }
  ]
}
