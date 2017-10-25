<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div v-show="editable" :class="[problems.length ? 'has-error' : '']">
        <input :id="id" :name="name" ref="input" v-model.lazy="amount" v-money="settings"
               class="input full-width" :placeholder="placeholder"
               autocomplete="off" :maxlength="max" @mouseup="$emit('mouseup', $event.target.value)"
               @keypress="$emit('keypress', $event.target.value)" @keyup="$emit('keyup', $event.target.value)"
               @blur="$emit('blur', $event.target.value)" @focus="$emit('focus', $event.target.value)"
               @change="updateValue"/>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/common/fields/components/field.vue'
  import { VMoney } from 'v-money'
  import FieldAbstract from 'src/app/common/fields/abstract'
  import { money } from 'src/support/utils'

  export default {
    computed: {
      html () {
        return money(this.value, 2)
      }
    },
    components: {
      Field
    },
    data: () => ({
      title: 'Este campo possui critérios de validação',
      settings: {
        // The character used to show the decimal place.
        decimal: ',',
        // The character used to separate numbers in groups of three.
        thousands: '.',
        // The currency name or symbol followed by a space.
        prefix: '',
        // The suffix (If a suffix is used by the target currency.)
        suffix: '',
        // Level of decimal precision. REQUIRED
        precision: 2,
        // If mask is false, outputs the number to the model. Otherwise outputs the masked string.
        masked: false
      },
      amount: 0,
      max: ''
    }),
    directives: {
      money: VMoney
    },
    extends: FieldAbstract,
    methods: {
      /**
       */
      updateValue () {
        const value = Number(String(this.amount).replace(/\./g, '').replace(',', '.'))
        if (value !== this.value) {
          this.$emit('input', value)
        }
      }
    },
    mounted () {
      this.amount = Number(this.value).toFixed(this.settings.precision)
    },
    name: 'field-money',
    watch: {
      value (value) {
        this.amount = Number(value).toFixed(this.settings.precision)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-money
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
