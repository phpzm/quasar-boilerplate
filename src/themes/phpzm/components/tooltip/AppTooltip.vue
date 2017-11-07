<template>
  <q-tooltip v-bind="{disable: disabled}">
    <slot/>
  </q-tooltip>
</template>

<script type="text/javascript">
  import tooltip from 'src/bootstrap/configure/tooltip'

  const AppTooltip = {
    extends: {},
    mixins: [],
    name: 'app-tooltip',
    props: {
      disable: {
        type: Boolean,
        default: () => false
      }
    },
    data: () => ({
      disabled: false
    }),
    computed: {
      classNames () {
        return [this.$options.name]
      }
    },
    created () {
      // test if environment has tooltips
      this.disabled = !tooltip(this)
      // if has, test if tooltip was disabled via props
      if (this.disabled) {
        return
      }
      this.disabled = this.disable
    }
  }
  export default AppTooltip
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
