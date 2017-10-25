import store from 'src/infra/store'

export const actions = [
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
      store.dispatch('logout')
      $component.$router.push('/auth/login')
    }
  }
]
