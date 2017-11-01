<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div v-show="editable" class="color-wrapper grid" :class="{'has-error': problems.length}">
        <div class="color" :style="{'background': value}"></div>
        <button class="color-button">
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
    .color-wrapper
      height 40px
    .color-button
      color #89919E
    .color
      display inline-block
      width 60px
      height 37px
      margin 0 10px 0 0
      border-radius 3px
      border 1px solid #e8e5e5
      box-shadow 0 2px 3px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.24)
    .html
      height 40px
      color #515151
      font-family Roboto
      font-size 14.4px
</style>
