import Vue from 'vue'

Vue.component('ActivateButton', {
  template:
  `<div>` +
    `<q-btn @click="click" :color="color" small><q-icon name="stars"/></q-btn> &nbsp; {{ value }}` +
    `<app-tooltip>{{ message }}</app-tooltip>` +
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
    color: 'green'
  }),
  computed: {
    message () {
      if (this.color === 'green') {
        return `Desativar ${this.value}`
      }
      return `Ativar ${this.value}`
    }
  },
  methods: {
    click () {
      this.$emit('click', this)
    },
    setActive () {
      this.color = 'green'
    },
    setInactive () {
      this.color = 'red'
    }
  },
  created () {
    if (this.value === 'Reuben Obrien') {
      this.setInactive()
    }
  }
})
