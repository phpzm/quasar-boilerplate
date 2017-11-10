<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-show="editable" :class="{'has-error': problems.length}">
        <q-select ref="input" class="input full-width" :class="{'disabled': disable}"
                  v-model="model" v-bind="{disable, options, multiple, chips, name, placeholder}"
                  @change="$emit('input', model)"/>
      </div>
      <div v-show="!editable" class="html ellipsis" v-html="html"></div>
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
    name: 'field-select',
    props: {
      type: {
        type: String,
        default: 'radio'
      },
      options: {
        type: Array,
        default: () => ([])
      },
      multiple: {
        type: Boolean,
        default: () => false
      },
      radio: {
        type: Boolean,
        default: () => false
      },
      toggle: {
        type: Boolean,
        default: () => false
      },
      chips: {
        type: Boolean,
        default: () => false
      },
      filter: {
        type: Boolean,
        default: () => false
      },
      separator: {
        type: Boolean,
        default: () => false
      },
      clearable: {
        type: Boolean,
        default: () => false
      },
      source: {
        type: Function
      },
      empty: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      model: undefined
    }),
    computed: {
      disable () {
        return this.disabled
      },
      html () {
        if (typeof this.model === 'undefined') {
          return ''
        }
        if (!this.options.length) {
          return ''
        }
        let model = this.model
        if (this.type === 'radio') {
          model = [this.model]
        }
        const selected = this.options.filter(option => model.includes(option.value))
        if (!selected.length) {
          return ''
        }
        return selected.map(item => item.label).join(', ')
      }
    },
    methods: {
      applyValue (value) {
        if (!this.multiple) {
          this.model = value
          return
        }
        if (Array.isArray(value)) {
          this.model = value
        }
      }
    },
    watch: {
      value (value) {
        this.applyValue(value)
      }
    },
    created () {
      if (this.multiple) {
        this.model = []
      }
      if (this.source) {
        this.source(options => options.forEach(option => this.options.push(option)))
      }
    },
    mounted () {
      this.applyValue(this.value)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-select
    .q-if-control
      position absolute
      right 0
      top 7px

  .field-select
    .q-if-disabled:before
      background none
    .q-select.q-if
      padding 6px 8px
    .has-error .q-picker-textfield
      background rgba(249, 125, 125, 0.2)
    .html
      height 36px
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
</style>
