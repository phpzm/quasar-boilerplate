<template>
  <div :class="classNames">
    <slot name="component">
      <input :type="type" ref="input" :name="schema.name" :id="schema.id" :value="value" :class="['full-width']"
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
  import Abstract from 'src/modules/Common/Fields/Abstract'

  export default {
    extends: Abstract,
    name: 'abstract-input',
    data: () => ({
      type: 'text'
    })
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
