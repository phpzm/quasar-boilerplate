<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div v-show="editable" :class="{'has-error': problems.length}">
        <!--suppress HtmlFormInputWithoutLabel -->
        <input :id="id" ref="input" :type="type" :name="name" class="input full-width" :placeholder="placeholder"
               autocomplete="off" :maxlength="max" :disabled="disabled"
               @keypress="keypress" @keyup="keyup" @mouseup="mouseup" @blur="blur" @focus="focus"
               @keydown.enter.stop.prevent="enter" @input="updateValue($event.target.value)"/>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/components/fields/components/field.vue'
  import FieldAbstract from 'src/app/components/fields/abstract'
  import { mask } from 'src/app/support/utils/index'

  export default {
    components: {
      Field
    },
    data: () => ({
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
    .html
      height 38px
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
</style>
