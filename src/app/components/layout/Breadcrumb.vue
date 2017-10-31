<template>
  <ul class="breadcrumb">
    <li>
      <!--suppress HtmlUnknownAnchorTarget -->
      <router-link :to="home">
        <q-icon name="home"></q-icon>
        <q-tooltip>Página Inicial</q-tooltip>
      </router-link>
    </li>
    <li v-for="item in items">
      <router-link :to="item.to">
        <q-icon :name="item.icon"></q-icon>
        <small>{{ item.label }}</small>
      </router-link>
      <q-tooltip :disable="!item.tooltip">{{ item.tooltip }}</q-tooltip>
    </li>
  </ul>
</template>

<script type="text/javascript">
  import { Events } from 'quasar-framework'
  import { PATH_HOME } from 'src/app/support'

  export default {
    name: 'breadcrumb',
    data: () => ({
      home: PATH_HOME,
      items: []
    }),
    methods: {
      /**
       */
      updateBreadcrumb () {
        this.items = this.$route.matched.filter(this.filterBreadcrumb).reduce(this.reduceBreadcrumb, [])
      },
      /**
       * @param {Object} match
       * @returns {boolean}
       */
      filterBreadcrumb (match) {
        return match.path !== this.home
      },
      /**
       * @param {Array} accumulate
       * @param {Object} match
       * @returns {*}
       */
      reduceBreadcrumb (accumulate, match) {
        let to = match.path
        Object.keys(this.$route.params).forEach(key => {
          to = to.replace(':' + key, this.$route.params[key])
        })
        if (match.meta.label) {
          accumulate.push({
            icon: match.meta.icon,
            label: match.meta.label,
            tooltip: match.meta.tooltip,
            path: match.path,
            to: to
          })
        }
        return accumulate
      }
    },
    created () {
      Events.$on('app.route.update', this.updateBreadcrumb)
    },
    mounted () {
      this.updateBreadcrumb()
    },
    destroyed () {
      Events.$off('app.route.update')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  ul.breadcrumb li
    margin 0
  ul.breadcrumb li:last-child a
    border-radius 2px
</style>
