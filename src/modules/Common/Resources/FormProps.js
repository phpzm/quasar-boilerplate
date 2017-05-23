const FormProps = {
  props: {
    schemas: {
      default: () => ({})
    },
    entry: {
      default: () => ({})
    },
    title: {
      type: String,
      default: ''
    },
    environment: {
      type: String,
      default: ''
    },
    service: {
      type: Object,
      default: () => ({})
    },
    base: {
      type: String,
      default: ''
    },
    actions: {
      type: Array,
      default: () => ([
        {
          position: ['top', 'bottom'],
          classNames: ['primary'],
          label: 'Salvar',
          click: vm => {
            vm.apply()
          }
        },
        {
          position: ['top', 'bottom'],
          classNames: ['link'],
          label: 'Fechar',
          click: vm => {
            console.log(vm)
          }
        },
        {
          position: ['floating'],
          classNames: ['primary', 'circular', 'button-bottom-right'],
          label: '',
          icon: 'add',
          click: vm => {
            console.log(vm)
          }
        }
      ])
    },
    params: {
      type: Array,
      default: () => (['id'])
    }
  }
}

export default FormProps
