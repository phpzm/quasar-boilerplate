<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import FieldAbstract from 'src/app/components/fields/abstract'

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
