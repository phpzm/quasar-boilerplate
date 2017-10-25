<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div v-show="editable" :class="[problems.length ? 'has-error' : '']">
      <textarea ref="input" :type="type" :name="name" :value="value"
                :placeholder="placeholder" class="input full-width" @mouseup="$emit('mouseup', $event.target.value)"
                @keypress="$emit('keypress', $event.target.value)" @keyup="$emit('keyup', $event.target.value)"
                @blur="$emit('blur', $event.target.value)" @focus="$emit('focus', $event.target.value)"
                @input="updateValue($event.target.value)"></textarea>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/common/fields/components/field.vue'
  import FieldAbstract from 'src/app/common/fields/abstract'

  export default {
    components: {
      Field
    },
    computed: {
      html () {
        return this.value
      }
    },
    data: () => ({
      title: 'Este campo possui critérios de validação'
    }),
    extends: FieldAbstract,
    name: 'field-textarea'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-textarea
    small
      color #bdbdbd
    textarea
      min-height 100px
    .error-message, .label-with-error
      color darkred
    .error-message
      font-size 12px
      i
        font-size 14px
        cursor pointer
    .has-error textarea
      background rgba(249, 125, 125, 0.2)
    .html
      height 100px
      overflow hidden
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
</style>
