<template>
  <div class="app-crud-grid">

    <app-button-bar :buttons="buttons.top" :handler="handler" :direction="direction" :record="data"/>

    <hr>
    <app-form ref="form" v-bind="{tabs, tab, fields, data, debug}" @form~input="input" @form~valid="valid"></app-form>
    <hr>

    <app-button-bar :buttons="buttons.top" :handler="handler" :direction="direction" :record="data"/>

    <div class="fixed-bottom-right">
      <app-button-bar :buttons="buttons.floating" :handler="handler" :record="data"/>
    </div>

    <template v-if="debugging">
      <app-debugger v-bind="{label: 'data', inspect: data}"></app-debugger>
      <app-debugger v-bind="{label: 'fields', inspect: fields}"></app-debugger>
    </template>
  </div>
</template>

<script type="text/javascript">
  import AppForm from 'genesis/components/form/AppForm.vue'
  import AppButtonBar from 'genesis/components/button/AppButtonBar.vue'
  import MixinNavigation from 'genesis/components/@mixins/MixinNavigation'
  import { MixinComputed, MixinData, MixinMethods, MixinProps } from 'genesis/components/crud/model'
  import { MixinForm } from 'genesis/components/crud/model/form'

  /**
   * @type {Object}
   * @property data
   */
  const AppCrudForm = {
    mixins: [
      MixinComputed, MixinData, MixinMethods, MixinProps, MixinNavigation, MixinForm
    ],
    name: 'app-crud-form',
    components: {
      AppForm, AppButtonBar
    }
  }
  export default AppCrudForm
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .app-crud-grid
    padding 16px 0 0 0
    hr
      margin 10px 0
    .fixed-bottom-right
      margin 5px
</style>
