<template>
  <div class="resource-form">
    <div class="form-container">
      <div class="form-header">{{ title }}</div>
      <div slot="buttons-top" class="form-top">
        <form-action :actions="buttonsTop"></form-action>
      </div>
      <div class="form-body">
        <pre>{{ items }}</pre>
        <div class="form">
          <component v-for="__item in items" :key="__item.field" :ref="__item.field" :is="__item.component"
                     :schema="__item.schema" v-model="record[__item.field]" :state="state"></component>
        </div>
      </div>
      <div slot="buttons-bottom" class="form-bottom">
        <form-action :actions="buttonsBottom"></form-action>
      </div>
    </div>
    <slot name="buttons-floating">
      <form-action :actions="buttonsFloating"></form-action>
    </slot>
  </div>
</template>

<script type="text/javascript">
  import 'src/modules/Common/Fields'

  import FormHooks from 'src/modules/Common/Resources/FormHooks'
  import FormMethods from 'src/modules/Common/Resources/FormMethods'
  import FormProps from 'src/modules/Common/Resources/FormProps'
  import FormData from 'src/modules/Common/Resources/FormData'
  import FormComputed from 'src/modules/Common/Resources/FormComputed'

  import FormAction from 'src/modules/Common/Resources/FormAction.vue'

  const ResourceForm = {
    name: 'resource-form',
    mixins: [
      FormHooks, FormMethods, FormProps, FormData, FormComputed
    ],
    components: {
      FormAction
    }
  }

  export default ResourceForm
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .resource-form
    display block
</style>
