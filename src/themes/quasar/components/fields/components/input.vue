<template>
  <field :class="classNames" v-bind="{id, inline, problems, validate, title, tooltip, editable, visible}">
    <div slot="component" :class="{'field-required': validate}">
      <q-field v-bind="{icon, helper, error, count}">
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
    }),
    computed: {
      error () {
        if (this.editable) {
          return !!this.problems.length
        }
        return false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .quasar-input
    .q-field
      &.q-field-with-error
        border none
    .q-field-no-input
      margin-top -1px
    .q-field-no-input::not(.q-field-with-error)
      border-top none
</style>
