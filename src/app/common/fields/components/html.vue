<template>
  <div :class="classNames">
    <label v-if="!inline" class="field-label">{{ label }}</label>
    <div v-html="html"></div>
  </div>
</template>

<script type="text/javascript">
  import FieldAbstract from 'src/app/common/fields/abstract'

  export default {
    extends: FieldAbstract,
    name: 'field-html',
    props: {
      output: {
        type: Function
      }
    },
    computed: {
      html () {
        if (this.value === undefined || this.value === '') {
          return '&nbsp;'
        }
        if (!this.output) {
          return this.value
        }
        return this.output(this.value)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-html
    min-height 70px
    > div
      padding 8px 0
      color #515151
</style>
