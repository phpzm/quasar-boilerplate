<template>
  <div :class="classNames">
  </div>
</template>

<script type="text/javascript">
  export default {
    extends: {},
    mixins: [],
    name: '',
    props: {},
    data: () => ({}),
    computed: {
      classNames () {
        return [this.$options.name]
      }
    },
    methods: {},
    created () {},
    mounted () {},
    destroyed () {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
