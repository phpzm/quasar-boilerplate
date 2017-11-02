<template>
  <field :class="classNames" v-bind="{id, inline, problems, validate, title, tooltip, editable, visible, label: ''}">
    <div slot="component">
      <small v-if="!inline && label">{{ label }}</small>
      <hr>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/themes/phpzm/components/fields/components/base.vue'
  import FieldAbstract from 'src/themes/phpzm/components/fields/abstract'

  export default {
    extends: FieldAbstract,
    components: {
      Field
    },
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
