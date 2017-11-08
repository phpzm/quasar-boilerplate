import Vue from 'vue'

Vue.component('MyButton', {
  template:
  `<div>` +
    `<q-btn @click="click" :color="color" small><q-icon name="stars"/></q-btn> {{ label }}` +
    `<app-tooltip>Criado por {{ user.name }}</app-tooltip>` +
  `</div>`,
  props: {
    value: {
      default: () => ''
    },
    record: {
      default: () => ''
    },
    user: {
      default: () => ({})
    }
  },
  data: () => ({
    label: 'Ativo',
    color: 'green'
  }),
  methods: {
    click () {
      this.$emit('click', this)
    },
    setActive () {
      this.label = 'Ativo'
      this.color = 'green'
    },
    setInactive () {
      this.label = 'Inativo'
      this.color = 'red'
    }
  },
  created () {
    if (this.value === 'Reuben Obrien') {
      this.setInactive()
    }
  }
})
