import Vue from 'vue'

import 'src/themes/phpzm/components/fields'

Vue.component('app-link', {
  template: `<router-link :to="to">{{ value }}</router-link>`,
  props: {
    value: {
      default: () => ''
    },
    record: {
      default: () => ({})
    }
  },
  computed: {
    to () {
      return {
        path: `/path/to/route/${this.value}`,
        query: this.$route.query
      }
    }
  }
})
