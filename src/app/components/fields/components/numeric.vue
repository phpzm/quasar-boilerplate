<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div v-show="editable" :class="{'has-error': problems.length}">
        <q-numeric v-model="model" v-bind="bind" @input="updateValue"></q-numeric>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/components/fields/components/field.vue'
  import FieldAbstract from 'src/app/components/fields/abstract'

  export default {
    components: {
      Field
    },
    computed: {
      bind () {
        return {
          min: this.min,
          max: this.max
        }
      },
      html () {
        return this.model
      }
    },
    data: () => ({
      updated: false,
      model: undefined
    }),
    extends: FieldAbstract,
    methods: {
      /**
       * @param {Number} value
       */
      applyValue (value) {
        if (!this.updated) {
          this.model = value
        }
        this.updated = false
      },
      updateValue () {
        this.updated = true
        this.$emit('input', this.model)
      }
    },
    mounted () {
      this.applyValue(this.value)
    },
    name: 'field-numeric',
    props: {
      options: {
        type: Array,
        default: () => ([])
      },
      title: {
        type: String,
        default: 'Este campo possui critérios de validação'
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      }
    },
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
  .field-numeric
    .q-numeric
      margin 0
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
