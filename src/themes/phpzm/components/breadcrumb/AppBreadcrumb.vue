<template>
  <ul class="breadcrumb">
    <li>
      <router-link :to="path">
        <q-icon :name="icon"></q-icon>
      </router-link>
    </li>
    <li v-for="item in items">
      <router-link :to="item.to">
        <q-icon :name="item.icon"></q-icon>
        <small class="breadcrumb-label">{{ item.label }}</small>
      </router-link>
      <app-tooltip :disable="!item.tooltip">{{ item.tooltip }}</app-tooltip>
    </li>
  </ul>
</template>

<script type="text/javascript">
  import { Events } from 'quasar-framework'
  import { PATH_HOME } from 'src/app/support/index'

  export default {
    name: 'app-breadcrumb',
    props: {
      icon: {
        type: String,
        default: 'home'
      }
    },
    data: () => ({
      path: PATH_HOME,
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
        return match.path !== this.path
      },
      /**
       * @param {Array} accumulate
       * @param {Object} match
       * @returns {*}
       */
      reduceBreadcrumb (accumulate, match) {
        let to = match.path
        Object.keys(this.$route.params).forEach(key => (to = to.replace(':' + key, this.$route.params[key])))
        if (this.isBreadcrumb(match)) {
          accumulate.push({
            icon: match.meta.icon,
            label: match.meta.label,
            tooltip: match.meta.tooltip,
            path: match.path,
            to: !match.meta.noLink ? to : ''
          })
        }
        return accumulate
      },
      /**
       * @param {Object} match
       * @returns {boolean}
       */
      isBreadcrumb (match) {
        if (!match.meta.icon) {
          return false
        }
        if (match.meta.noBreadcrumb) {
          return false
        }
        if (!Array.isArray(match.meta.avoid)) {
          return true
        }
        return !match.meta.avoid.includes(this.$route.path)
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
  ul.breadcrumb
    margin 7px 0 0 0
    li
      margin 0
    &:last-child a
      border-radius 2px
    @media screen and (max-width 768px)
      small.breadcrumb-label
        font-size 10px
    @media screen and (max-width 480px)
      small.breadcrumb-label
        display none
</style>
