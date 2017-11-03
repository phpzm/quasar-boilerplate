<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-show="editable" :class="{'has-error': problems.length}">
        <input ref="input" class="input full-width" autocomplete="off" type="password"
               v-bind="{id, name, placeholder, disabled}"
               @keypress="keypress" @keyup="keyup" @blur="blur" @focus="focus" @keydown.enter.stop.prevent="enter"
               @input="updateValue($event.target.value)"/>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
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
    name: 'field-password',
    data: () => ({
      html: ''
    }),
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
        if (this.$refs.input) {
          this.$refs.input.value = value
        }
      }
    },
    watch: {
      value (value) {
        this.applyValue(value)
      }
    },
    mounted () {
      this.applyValue(this.value)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .field-text
    .html
      height 38px
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
</style>
