<template>
  <div :class="classNames">
    <slot name="component">
      <input ref="input" :name="schema.name" :id="schema.id" :value="value" :class="['full-width']"
             :disabled="schema.disabled" :placeholder="schema.placeholder" :title="schema.title"
             :required="schema.required"
             @keydown="fieldKeyDown(arguments[0])"
             @keypress="fieldKeyPress(arguments[0])"
             @keyup="fieldKeyUp(arguments[0])"
             @textInput="fieldTextInput(arguments[0])"
             @mouseup="fieldMouseUp(arguments[0])"
             @focus.prevent="fieldFocusIn(arguments[0])"
             @focusout="fieldFocusOut(arguments[0])"
             @cut="fieldCut(arguments[0])"
             @copy="fieldCopy(arguments[0])"
             @paste="fieldPaste(arguments[0])"
             @blur="fieldBlur(arguments[0])"/>
    </slot>
    <slot name="label">
      <label :for="schema.id" v-if="schema.label">{{ label }}</label>
    </slot>
    <slot name="error">
    </slot>
  </div>
</template>

<script type="text/javascript">
  import { Utils } from 'quasar-framework'

  const schema = {
    id: Utils.uid(),
    label: '',
    title: '',
    placeholder: '',
    mask: '',
    disabled: false,
    required: true
  }

  const Abstract = {
    name: 'input-text',
    props: {
      value: {
        type: String
      },
      schema: {
        type: Object,
        default: () => schema
      }
    },
    data: () => ({}),
    computed: {
      classNames () {
        return ['floating-label']
      },
      label () {
        return this.schema.label + ' ' + (this.schema.required ? '*' : '')
      }
    },
    create () {
      this.schema = Object.assign({}, schema, this.schema)
    },
    methods: {
      /**
       * @param value
       */
      setValue (value) {
        this.$refs.input.value = value
        this.$emit('input', value)
      },
      /**
       * @return mixed
       */
      getValue () {
        return this.$refs.input.value
      },
      fieldKeyDown (e) {
      },
      fieldKeyPress (e) {
      },
      fieldKeyUp (e) {
      },
      fieldTextInput (e) {
      },
      fieldMouseUp (e) {
      },
      fieldFocusIn (e) {
      },
      fieldFocusOut (e) {
      },
      fieldBlur (e) {
        this.$emit('blur')
      },
      fieldCut (e) {
      },
      fieldCopy (e) {
      },
      fieldPaste (e) {
      }
    }
  }

  export default Abstract
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
