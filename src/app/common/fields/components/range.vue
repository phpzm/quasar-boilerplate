<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <q-range v-model="model" v-bind="bind" @input="$emit('input', model)"></q-range>
      <div class="html" v-html="info"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/common/fields/components/field.vue'
  import FieldAbstract from 'src/app/common/fields/abstract'
  import { money } from 'src/support/utils'

  export default {
    components: {
      Field
    },
    computed: {
      disable () {
        if (this.disabled) {
          return true
        }
        return !this.editable
      },
      info () {
        if (this.price) {
          return '<small>Investimento</small> R$ ' + money(this.value * this.price) + ''
        }
        return money(this.value)
      },
      bind () {
        const bind = {
          min: this.min,
          max: this.max,
          label: this.labelShow,
          disable: !this.editable
        }
        const properties = ['step', 'labelAlways', 'snap', 'markers']
        properties.forEach(property => {
          if (this[property]) {
            bind[property] = this[property]
          }
        })
        return bind
      }
    },
    created () {
      this.model = this.value || this.min || 0
    },
    data: () => ({
      model: 0
    }),
    extends: FieldAbstract,
    name: 'field-range',
    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      price: {
        type: Number,
        default: 1
      },
      labelShow: {
        type: Boolean,
        default: true
      },
      labelAlways: {
        type: Boolean,
        default: false
      },
      snap: {
        type: Boolean,
        default: false
      },
      markers: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value (model) {
        this.model = model
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-range
    .html
      color #515151
      padding-left 8px
      text-align center
    .q-range
      margin-top 20px
</style>
