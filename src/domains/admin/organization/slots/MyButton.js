import Vue from 'vue'

Vue.component('MyButton', {
  template:
  `<div>` +
    `<q-btn @click="$emit('click')" color="red" small><q-icon name="stars"/></q-btn> {{ value }}` +
    `<q-tooltip>Criado por {{ user.name }}</q-tooltip>` +
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
