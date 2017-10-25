<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div v-show="editable" :class="[problems.length ? 'has-error' : '']">
        <input :id="id" ref="input" :type="type" :name="name" class="input full-width" :placeholder="placeholder"
               autocomplete="off" :maxlength="max" @mouseup="$emit('mouseup', $event.target.value)" :disabled="disabled"
               @keypress="$emit('keypress', $event.target.value)" @keyup="$emit('keyup', $event.target.value)"
               @blur="$emit('blur', $event.target.value)" @focus="$emit('focus', $event.target.value)"
               @keydown.enter.stop.prevent="$emit('enter', value, $event)" @input="updateValue($event.target.value)"/>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/common/fields/components/field.vue'
  import FieldAbstract from 'src/app/common/fields/abstract'
  import { mask } from 'src/app/common/utils'

  export default {
    components: {
      Field
    },
    data: () => ({
      title: 'Este campo possui critérios de validação',
      html: '',
      max: ''
    }),
    extends: FieldAbstract,
    methods: {
      /**
       * @param {*} value
       */
      applyValue (value) {
        if (value === undefined) {
          return
        }
        if (value === null) {
          return
        }
        if (this.mask) {
          this.max = this.mask.length
          value = mask(this.mask, String(value))
        }
        this.html = value
        if (this.$refs.input) {
          this.$refs.input.value = value
        }
      }
    },
    mounted () {
      this.applyValue(this.value)
    },
    name: 'field-text',
    watch: {
      value (value) {
        this.applyValue(value)
      },
      mask () {
        this.applyValue(this.value)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-text
    .error-message, .label-with-error
      color darkred
    .error-message
      font-size 12px
      i
        font-size 14px
        cursor pointer
    .has-error input
      background rgba(249, 125, 125, 0.2)
    .html
      height 38px
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
    input:-webkit-autofill
      -webkit-box-shadow 0 0 0 1000px #ffffff inset, 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important
</style>
