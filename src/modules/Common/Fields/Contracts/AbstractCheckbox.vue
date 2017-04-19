<template>
  <div :class="classNames">
    <slot name="label">
      <label class="label-checkbox" @click="checked = !checked" v-if="schema.label">
        {{ label }}
      </label>
    </slot>
    <slot name="component">
      <label>
        <q-checkbox v-model="checked" :disable="schema.disabled"></q-checkbox>
        {{ schema.placeholder }}
      </label>
    </slot>
    <slot name="error">
    </slot>
  </div>
</template>

<script type="text/javascript">
  import Abstract from 'src/modules/Common/Fields/Contracts/Abstract'

  export default {
    extends: Abstract,
    name: 'abstract-checkbox',
    data: () => ({
      checked: false
    }),
    computed: {
      classNames () {
        const classNames = ['field-checkbox']
        if (this.schema.placeholder) {
          classNames.push('with-placeholder')
        }
        return classNames
      }
    },
    watch: {
      checked () {
        this.$emit('input', this.checked)
      }
    },
    created () {
      this.checked = !!this.value
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-checkbox
    text-align left
    .label-checkbox
      margin 0 10px 10px 0
    &.with-placeholder
      .label-checkbox
        display block
</style>
