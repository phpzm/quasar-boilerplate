<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div v-show="editable" :class="{'has-error': problems.length}">
        <!--suppress HtmlFormInputWithoutLabel -->
        <input :id="id" :name="name" ref="input" v-model.lazy="amount" v-money="settings"
               class="input full-width" :placeholder="placeholder" autocomplete="off" :maxlength="max"
               @keypress="keypress" @keyup="keyup" @mouseup="mouseup" @blur="blur" @focus="focus"
               @keydown.enter.stop.prevent="enter" @change="updateValue"/>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/components/fields/components/field.vue'
  import { VMoney } from 'v-money'
  import FieldAbstract from 'src/app/components/fields/abstract'
  import { money } from 'src/app/support/utils'

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
    .html
      height 38px
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
</style>
