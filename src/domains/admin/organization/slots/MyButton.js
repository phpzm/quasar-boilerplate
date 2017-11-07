import Vue from 'vue'

Vue.component('MyButton', {
  template:
  `<div>` +
    `<q-btn @click="$emit('click')" color="red" small><q-icon name="stars"/></q-btn> {{ value }}` +
    `<app-tooltip>Criado por {{ user.name }}</app-tooltip>` +
  `</div>`,
  props: {
    value: {
      default: () => ''
    },
    user: {
      default: () => ({})
    }
  }
})
