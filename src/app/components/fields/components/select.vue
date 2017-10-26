<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div v-show="editable" :class="[problems.length ? 'has-error' : '']">
        <q-select ref="input" v-model="model" :disable="disabled" :options="allOptions" :type="type" :name="name"
                  class="input full-width" :placeholder="placeholder" @input="$emit('input', model)"></q-select>
      </div>
      <div v-show="!editable" class="html ellipsis" v-html="html"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/components/fields/components/field.vue'
  import FieldAbstract from 'src/app/components/fields/abstract'

  export default {
    components: {
      Field
    },
    computed: {
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
        const selected = this.options.filter(_option => model.includes(_option.value))
        if (!selected.length) {
          return ''
        }
        return selected
          .map(_item => {
            return _item.label
          })
          .join(', ')
      },
      allOptions () {
        if (!this.empty) {
          return this.options
        }

        const empty = {
          value: '',
          label: this.empty
        }
        if (this.options.length) {
          return [empty, ...this.options]
        }
        return [empty]
      }
    },
    created () {
      this.model = this.value
      if (this.type === 'checkbox') {
        this.model = this.value || []
      }
      if (this.source) {
        this.source(options => {
          options.forEach(_option => {
            this.options.push(_option)
          })
        })
      }
    },
    data: () => ({
      model: ''
    }),
    extends: FieldAbstract,
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
      source: {
        type: Function
      },
      empty: {
        type: String,
        default: ''
      }
    },
    watch: {
      value (value) {
        this.model = value
      }
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
    .q-select.q-if
      padding 6px 8px
    .error-message, .label-with-error
      color darkred
    .error-message
      font-size 12px
      i
        font-size 14px
        cursor pointer
    .has-error .q-picker-textfield
      background rgba(249, 125, 125, 0.2)
    .html
      height 36px
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
    input:-webkit-autofill
      -webkit-box-shadow 0 0 0 1000px #ffffff inset, 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important
</style>
