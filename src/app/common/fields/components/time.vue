<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">

      <div v-show="editable" :class="{'component': true, 'has-error': problems.length}">
        <i class="material-icons" @click="openWidget">access_time</i>
        <q-datetime ref="widget" v-model="widget" type="time"
                    ok-label="Ok" cancel-label="Cancelar" clear-label="Limpar"></q-datetime>
        <input :id="id" ref="input" :type="'text'" :name="name" class="input full-width" :placeholder="placeholder"
               autocomplete="off" :maxlength="5" @mouseup="$emit('mouseup', $event.target.value)" :disabled="disabled"
               @keypress="keypress" @keyup="$emit('keyup', $event.target.value)"
               @blur="blur" @focus="$emit('focus', $event.target.value)"
               @keydown.enter.stop.prevent="$emit('enter', value, $event)" @input="updateValue($event.target.value)"/>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/common/fields/components/field.vue'
  import FieldAbstract from 'src/app/common/fields/abstract'
  import { mask, unMask, padLet } from 'src/app/common/utils'
  import moment from 'moment'

  const pattern = '##:##'

  export default {
    components: {
      Field
    },
    data: () => ({
      title: 'Este campo possui critérios de validação',
      html: '',
      widget: '',
      updated: false
    }),
    extends: FieldAbstract,
    methods: {
      beforeSend (value) {
        return Number(unMask(pattern, value))
      },
      /**
       */
      openWidget () {
        this.$refs.widget.open()
      },
      /**
       * @param {*} value
       */
      updateValue (value) {
        this.$emit('input', unMask(pattern, value), this)
      },
      /**
       * @param {*} value
       */
      applyValue (value) {
        if (value === undefined) {
          return
        }
        if (value === null) {
          return
        }
        value = mask(pattern, String(value))

        this.html = value
        if (this.$refs.input) {
          this.$refs.input.value = value
        }
      },
      /**
       * @param {object} $event
       */
      keypress ($event) {
        const keyCode = $event.keyCode
        if (keyCode >= 65 && keyCode <= 122) {
          $event.preventDefault()
          return $event.stopPropagation()
        }
        this.$emit('keypress', $event.target.value)
      },
      /**
       * @param {object} $event
       */
      blur ($event) {
        const value = String($event.target.value)
        if ($event.target.value !== '') {
          this.applyValue(padLet(value, 4))
        }
        this.$emit('blur', value)
      }
    },
    mounted () {
      this.applyValue(this.value)
    },
    name: 'field-time',
    watch: {
      value (value) {
        if (!this.updated) {
          value = padLet(String(value), 4)
          this.updated = true
        }
        this.applyValue(value)
      },
      widget (value) {
        if (!value) {
          return
        }
        value = moment(value).local(true).format('HH:mm')
        this.applyValue(value)
        this.updateValue(value)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-time
    .error-message, .label-with-error
      color darkred
    .error-message
      font-size 12px
      i
        font-size 14px
        cursor pointer
    .has-error input
      background rgba(249, 125, 125, 0.2)
    .component
      position relative
      & > input
        max-height 34px
      & > .material-icons
        position absolute
        cursor pointer
        right 0
        top 0
        background #ef0000
        color #ffffff
        padding 3px 10px
        font-size 20px
        z-index 10
        border-radius 2px
      & > .q-picker-textfield
        position absolute
        top 0
        right 0
        width 38px
        min-width inherit
        height 28px
        min-height inherit
        padding 0
        box-shadow none
    .html
      height 35px
      color #515151
      padding 8px
      font-family Roboto
      font-size 14.4px
    input:-webkit-autofill
      -webkit-box-shadow 0 0 0 1000px #ffffff inset, 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important
</style>
