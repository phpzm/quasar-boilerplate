<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-show="editable" :class="{'component': true, 'has-error': problems.length}">
        <i class="material-icons" @click="openWidget">access_time</i>
        <q-datetime ref="widget" v-model="widget" type="time" ok-label="Ok" cancel-label="Cancelar"
                    clear-label="Limpar"></q-datetime>
        <input ref="input" class="input full-width" autocomplete="off"
               v-bind="{id, name, placeholder, maxlength, disabled}"
               @keypress="keypress" @keyup="keyup" @blur="blur" @focus="focus" @keydown.enter.stop.prevent="enter"
               @input="updateValue($event.target.value)"/>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/components/fields/components/base.vue'
  import FieldAbstract from 'src/app/components/fields/abstract'
  import { mask, unMask, padLeft } from 'src/app/support/utils/index'
  import moment from 'moment'

  const pattern = '##:##'

  export default {
    extends: FieldAbstract,
    components: {
      Field
    },
    name: 'field-time',
    data: () => ({
      html: '',
      widget: '',
      maxlength: 5,
      updated: false
    }),
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
        if (this.events.keypress) {
          this.events.keypress(this, $event.target.value)
        }
      },
      /**
       * @param {object} $event
       */
      blur ($event) {
        const value = String($event.target.value)
        if ($event.target.value !== '') {
          this.applyValue(padLeft(value, 4))
        }
        if (this.events.blur) {
          this.events.blur(this, $event.target.value)
        }
      },
      /**
       * @param {object} $event
       */
      focus ($event) {
        if (this.events.focus) {
          this.events.focus(this, $event)
        }
      }
    },
    watch: {
      value (value) {
        if (!this.updated) {
          value = padLeft(String(value), 4)
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
    },
    mounted () {
      this.applyValue(this.value)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~variables'

  .field-time
    .component
      position relative
      & > input
        max-height 34px
      & > .material-icons
        position absolute
        cursor pointer
        right 0
        top 0
        background $primary
        color #ffffff
        padding 7px 10px
        font-size 20px
        z-index 10
        border-radius 2px
      & > .q-datetime-input
        position absolute
        top 0
        right 0
        width 38px
        height 34px
        padding 0
        margin 0
        overflow hidden
        border none
        min-width inherit
        min-height inherit
        box-shadow none
    .html
      height 35px
      color #515151
      padding 8px
      font-family Roboto
      font-size 14.4px
</style>
