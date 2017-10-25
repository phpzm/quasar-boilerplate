<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">

      <div v-show="editable" :class="['component', problems.length ? 'has-error' : '']">
        <i class="material-icons" @click="openWidget">&#xE878;</i>
        <q-datetime ref="widget" v-model="widget"
                    type="date" ok-label="Ok" cancel-label="Cancelar" clear-label="Limpar"></q-datetime>
        <input :id="id" ref="input" :type="type" :name="name" class="input full-width" :placeholder="placeholder"
               autocomplete="off" :maxlength="max" @mouseup="$emit('mouseup', $event.target.value)" :disabled="disabled"
               @keypress="$emit('keypress', $event.target.value)" @keyup="$emit('keyup', $event.target.value)"
               @blur="$emit('blur', $event.target.value)" @focus="$emit('focus', $event.target.value)"
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

  export default {
    components: {
      Field
    },
    created () {
      this.max = this.mask.length
    },
    data: () => ({
      title: 'Este campo possui critérios de validação',
      widget: '',
      html: '',
      max: ''
    }),
    extends: FieldAbstract,
    methods: {
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
        value = this.toBR(value)
        this.html = value
        if (this.$refs.input) {
          this.$refs.input.value = value
        }
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
        if (value.includes('/')) {
          value = this.toEN(value)
        }
        this.$emit('input', value, this)
      },
      /**
       * @param {string} value
       * @return {string}
       */
      toEN (value) {
        value = String(value)
        if (value.length > 10) {
          value = value.substring(0, 10)
        }
        return value.split('/').reverse().join('-')
      },
      /**
       * @param {string} value
       * @return {string}
       */
      toBR (value) {
        value = String(value)
        if (value.length > 10) {
          value = value.substring(0, 10)
        }
        return value.split('-').reverse().join('/')
      }
    },
    mounted () {
      this.applyValue(this.value)
    },
    name: 'field-date',
    watch: {
      value (value) {
        this.applyValue(value)
      },
      mask () {
        this.applyValue(this.value)
      },
      widget (value) {
        if (!value) {
          return
        }
        value = String(value).substring(0, 10)
        this.applyValue(value)
        this.updateValue(value)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-date
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
        position absolute !important
        cursor pointer
        right 0
        top 0
        background #3cb371
        color #ffffff
        padding 7px 10px
        font-size 20px
        z-index 10
        border-radius 2px
      & > .q-datetime-input
        position absolute !important
        z-index 9
        top 0
        right 0
        width 38px
        height 28px
        min-width inherit
        min-height inherit
        margin 0
        padding 0
        box-shadow none
    .html
      height 38px
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
    input:-webkit-autofill
      -webkit-box-shadow 0 0 0 1000px #ffffff inset, 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important
</style>
