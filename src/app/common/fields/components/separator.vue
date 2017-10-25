<template>
  <div :class="classNames" v-show="dependsIsOk">
    <label v-if="!inline && label">{{ label }}</label>
  </div>
</template>

<script type="text/javascript">
  import FieldAbstract from 'src/app/common/fields/abstract'

  export default {
    extends: FieldAbstract,
    name: 'field-separator'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-separator
    label
      color #666
      display block
      text-transform: uppercase
      padding 10px 0
</style>
