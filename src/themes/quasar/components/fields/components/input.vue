<template>
  <field :class="classNames" v-bind="{id, inline, problems, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <q-field v-bind="{icon, helper}">
        <q-input v-model="model" v-bind="{'float-label': label, suffix}" @input="$emit('input', model)"/>
      </q-field>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/themes/phpzm/components/fields/components/base.vue'
  import FieldAbstract from 'src/themes/phpzm/components/fields/abstract'

  export default {
    extends: FieldAbstract,
    components: {
      Field
    },
    name: 'quasar-input',
    props: {
      icon: String,
      helper: String,
      'error-label': {
        default: () => 'We need a valid email'
      },
      count: Number,
      suffix: String
    },
    data: () => ({
      model: undefined
    })
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
