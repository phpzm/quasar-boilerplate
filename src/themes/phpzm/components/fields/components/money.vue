<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-show="editable" :class="{'has-error': problems.length}">
        <input v-model.lazy="amount" v-money="settings"
               ref="input" class="input full-width" autocomplete="off"
               v-bind="{id, type, name, placeholder, maxlength, disabled}"
               @keypress="keypress" @keyup="keyup" @blur="blur" @focus="focus" @keydown.enter.stop.prevent="enter"
               @change="updateValue"/>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/themes/phpzm/components/fields/components/base.vue'
  import { VMoney } from 'v-money'
  import FieldAbstract from 'src/themes/phpzm/components/fields/abstract'
  import { money } from 'src/app/support/utils'

  export default {
    extends: FieldAbstract,
    components: {
      Field
    },
    directives: {
      money: VMoney
    },
    name: 'field-money',
    data: () => ({
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
      amount: undefined,
      activated: false
    }),
    computed: {
      html () {
        return money(this.value, 2)
      }
    },
    methods: {
      /**
       */
      updateValue () {
        if (!this.activated) {
          return
        }
        const value = Number(String(this.amount).replace(/\./g, '').replace(',', '.'))
        if (value !== this.value) {
          this.$emit('input', value)
        }
      },
      /**
       * @param {Number} value
       */
      applyValue (value) {
        this.amount = Number(value).toFixed(this.settings.precision)
      },
      /**
       */
      activate () {
        this.activated = true
      },
      /**
       */
      keypress () {
        this.activate()
      }
    },
    watch: {
      value (value) {
        this.activate()
        if (value !== undefined) {
          this.applyValue(value)
        }
      }
    },
    mounted () {
      if (this.value !== undefined) {
        this.applyValue(this.value)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .field-money
    input
      text-align right
    .html
      height 38px
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
</style>
