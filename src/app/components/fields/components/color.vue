<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">

    <div slot="component">
      <div v-show="editable" style="height: 40px" :class="[problems.length ? 'has-error' : '', 'grid']">
        <div class="color" :style="{'background': value}"></div>
        <button style="color: #89919E">
          <i>search</i>
          <q-popover ref="popover">
            <sketch :value="model" @input="updateValue"></sketch>
          </q-popover>
        </button>
      </div>
      <div v-show="!editable" class="html grid">
        <div class="color" :style="{'background': value}"></div>
      </div>
    </div>

  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/components/fields/components/field.vue'
  import FieldAbstract from 'src/app/components/fields/abstract'
  import { Sketch } from 'vue-color'

  export default {
    components: {
      Field, Sketch
    },
    data: () => ({
      model: {
        hex: '#ffffff'
      }
    }),
    extends: FieldAbstract,
    methods: {
      updateValue (color) {
        this.$emit('input', color.hex)
      }
    },
    name: 'field-color',
    watch: {
      value (color) {
        this.model.hex = color
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-color
    .color
      display inline-block
      width 60px
      height 37px
      margin 0 10px 0 0
      border-radius 3px
      border 1px solid #e8e5e5
      box-shadow 0 2px 3px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.24)
    .error-message, .label-with-error
      color darkred
    .error-message
      font-size 12px
      i
        font-size 14px
        cursor pointer
    .has-error input
      background rgba(249, 125, 125, 0.2)
    .html
      height 40px
      color #515151
      font-family Roboto
      font-size 14.4px
    input:-webkit-autofill
      -webkit-box-shadow 0 0 0 1000px #ffffff inset, 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important
</style>
