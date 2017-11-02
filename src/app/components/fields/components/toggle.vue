<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-show="editable" class="toggle-wrapper" :class="{'has-error': problems.length}">
        <label>
          <q-toggle ref="input" v-model="model" v-bind="{type, name, disable}"
                    @input="$emit('input', model)"></q-toggle>
          <span :class="{'disabled': disabled}" v-html="info"></span>
        </label>
      </div>
      <div v-show="!editable" class="html" v-html="info"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/components/fields/components/base.vue'
  import FieldAbstract from 'src/app/components/fields/abstract'

  export default {
    extends: FieldAbstract,
    components: {
      Field
    },
    name: 'field-toggle',
    props: {
      placeholderTrue: {
        type: String,
        default: 'Sim'
      },
      placeholderFalse: {
        type: String,
        default: 'Não'
      }
    },
    data: () => ({
      model: false
    }),
    computed: {
      disable () {
        if (this.disabled) {
          return true
        }
        return !this.editable
      },
      info () {
        let info = 'placeholder'
        if (this.placeholderTrue && this.placeholderFalse) {
          info = 'placeholderFalse'
          if (this.model) {
            info = 'placeholderTrue'
          }
        }
        return this[info]
      }
    },
    watch: {
      value (value) {
        this.model = !!value
      }
    },
    created () {
      this.model = !!this.value
      this.$emit('input', this.model)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-toggle
    .toggle-wrapper
      margin-top 10px
    .html
      color #515151
      margin-top 10px
      padding-left 8px
</style>
