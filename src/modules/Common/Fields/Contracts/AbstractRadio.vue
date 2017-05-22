<template>
  <div>
    <label style="display: block">{{ label }}</label>
    <label v-for="__option in options">
      <q-radio  :val="__option.value" v-model="model" @input="$emit('input', model)"></q-radio>
      {{ __option.label }}
    </label>
  </div>
</template>

<script type="text/javascript">
  import Abstract from 'src/modules/Common/Fields/Contracts/Abstract'

  export default {
    extends: Abstract,
    name: 'abstract-radio',
    data: () => ({
      model: undefined,
      options: []
    }),
    created () {
      this.model = this.value
      this.options = this.schema.options
    }
  }
</script>

<style></style>
