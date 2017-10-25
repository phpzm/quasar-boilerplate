<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div v-show="editable" :class="[problems.length ? 'has-error' : '']" style="margin-top: 10px">
        <label>
          <q-checkbox ref="input" v-model="model" :type="type" :name="name"
                      :disable="disable" @input="$emit('input', model)"></q-checkbox>
          <span :class="[disable ? 'disabled' : '']" v-html="info"></span>
        </label>
      </div>

      <div v-show="!editable" class="html" v-html="info"></div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/common/fields/components/field.vue'
  import FieldAbstract from 'src/app/common/fields/abstract'

  export default {
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
    components: {
      Field
    },
    created () {
      this.model = !!this.value
      this.$emit('input', this.model)
    },
    data: () => ({
      model: false
    }),
    extends: FieldAbstract,
    name: 'field-checkbox',
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
    watch: {
      value (value) {
        this.model = !!value
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-checkbox
    .html
      color #515151
      margin-top 10px
      padding-left 8px
</style>
