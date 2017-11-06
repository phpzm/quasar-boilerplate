import Vue from 'vue'

Vue.component('MyButton', {
  template:
  `<div>` +
    `<q-btn @click="$emit('click')" color="red" small><q-icon name="home"></q-icon></q-btn> {{ value }}` +
  `</div>`,
  props: {
    value: {
      default: () => ''
    }
  }
})
