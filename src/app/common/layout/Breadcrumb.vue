<template>
  <ul class="breadcrumb">
    <li>
      <!--suppress HtmlUnknownAnchorTarget -->
      <router-link to="/dashboard">
        <q-icon name="home"></q-icon>
        <q-tooltip>Página Inicial</q-tooltip>
      </router-link>
    </li>
    <li v-for="item in items">
      <router-link :to="item.to">
        <q-icon :name="item.icon"></q-icon>
        <small>{{ item.label }}</small>
        <q-tooltip v-if="item.tooltip">{{ item.tooltip }}</q-tooltip>
      </router-link>
    </li>
  </ul>
</template>

<script type="text/javascript">
  export default {
    name: 'breadcrumb',
    data: () => ({
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
        return match.name !== 'dashboard.home'
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
    watch: {
      '$route' () {
        this.updateBreadcrumb()
      }
    },
    mounted () {
      this.updateBreadcrumb()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
