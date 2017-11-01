<template>
  <div :class="classNames" v-show="dependsIsOk">
    <small v-if="!inline && label">{{ label }}</small>
    <hr>
  </div>
</template>

<script type="text/javascript">
  import FieldAbstract from 'src/app/components/fields/abstract'

  export default {
    extends: FieldAbstract,
    name: 'field-separator'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-separator
    position relative
    hr
      margin 0 0 10px 0
    small
      color #9f9f9f
      display block
      padding 10px 0
</style>
