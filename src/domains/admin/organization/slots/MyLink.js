import Vue from 'vue'

Vue.component('MyLink', {
  template:
  `<div>` +
    `<router-link :to="to">{{ value }}</router-link>` +
    `<q-tooltip>{{ tooltip }}</q-tooltip>` +
  `</div>`,
  props: {
    path: {
      default: () => ''
    },
    value: {
      default: () => ''
    },
    record: {
      default: () => ({})
    }
  },
  computed: {
    to () {
      const reduce = (path, property) => path.replace(`{${property}}`, this.record[property])
      return {
        path: Object.keys(this.record).reduce(reduce, String(this.path)),
        query: this.$route.query
      }
    },
    tooltip () {
      return this.record ? this.record.name : ''
    }
  }
})
