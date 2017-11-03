<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-show="editable" :class="{'has-error': problems.length}">
        <input ref="input" class="input full-width" autocomplete="off"
               v-bind="{id, type, name, placeholder, maxlength, disabled}"
               @keypress="keypress" @keyup="keyup" @blur="blur" @focus="focus" @keydown.enter.stop.prevent="enter"
               @input="updateValue($event.target.value)"/>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/themes/phpzm/components/fields/components/base.vue'
  import FieldAbstract from 'src/themes/phpzm/components/fields/abstract'
  import { mask } from 'src/app/support/utils'

  export default {
    extends: FieldAbstract,
    components: {
      Field
    },
    name: 'field-phone',
    props: {
      options: {
        type: Array,
        default: () => ([])
      }
    },
    data: () => ({
      html: '',
      pattern: '(##) ####-####',
      maxlength: '16'
    }),
    methods: {
      keypress ($event) {
        this.pattern = '(##) ####-####'
        if ($event.target.value.length > 13) {
          this.pattern = '(##) #-####-####'
        }
      },
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
        value = String(value)
        value = mask(this.pattern, value)

        this.html = value
        if (this.$refs.input) {
          this.$refs.input.value = value
        }
      }
    },
    watch: {
      value (value) {
        this.applyValue(value)
      },
      mask () {
        this.applyValue(this.value)
      }
    },
    mounted () {
      this.applyValue(this.value)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .field-phone
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
