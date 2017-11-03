<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-show="editable" :class="{'component': true, 'has-error': problems.length}">
        <i class="material-icons" @click="openWidget">access_time</i>
        <q-datetime ref="widget" v-model="widget" type="time" ok-label="Ok" cancel-label="Cancelar"
                    clear-label="Limpar"></q-datetime>
        <input ref="input" class="input full-width" autocomplete="off"
               v-mask="pattern"
               v-model="model" v-bind="{id, name, placeholder, maxlength, disabled}"
               @keypress="keypress" @keyup="keyup" @blur="blur" @focus="focus" @keydown.enter.stop.prevent="enter"
               @input="updateValue($event.target.value)"/>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import moment from 'moment'
  import { VueMaskDirective } from 'v-mask'
  import Field from 'src/themes/phpzm/components/fields/components/base.vue'
  import FieldAbstract from 'src/themes/phpzm/components/fields/abstract'
  import { mask, unMask, padRight, padLeft } from 'src/app/support/utils'

  export default {
    components: {
      Field
    },
    computed: {
      html () {
        return this.model
      }
    },
    data: () => ({
      widget: '',
      updated: false,
      pattern: '##:##',
      model: '',
      maxlength: 5
    }),
    directives: {
      'mask': VueMaskDirective
    },
    extends: FieldAbstract,
    methods: {
      /**
       */
      openWidget () {
        this.$refs.widget.open()
      },
      /**
       * @param {string} value
       */
      updateValue (value) {
        this.updated = true
        this.$emit('input', Number(unMask(this.pattern, value)), this)
      },
      /**
       * @param {int} value
       */
      watchValue (value) {
        if (!this.updated) {
          this.padLeft(value)
        }
        this.updated = true
      },
      /**
       * @param {string} value
       */
      applyValue (value) {
        this.updated = true
        this.model = mask(this.pattern, unMask(this.pattern, value))
      },
      /**
       * @param {string} value
       */
      padLeft (value) {
        this.model = mask(this.pattern, padLeft(unMask(this.pattern, value), 4))
      },
      /**
       * @param {string} value
       */
      padRight (value) {
        this.model = mask(this.pattern, padRight(unMask(this.pattern, value), 4))
      },
      /**
       * @param {string} $event
       */
      blur ($event) {
        this.padRight($event.target.value)
        this.updateValue($event.target.value)
      }
    },
    mounted () {
      if (this.value) {
        this.model = this.value
      }
    },
    name: 'field-time',
    watch: {
      value (value) {
        this.watchValue(value)
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
