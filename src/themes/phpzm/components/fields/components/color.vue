<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-show="editable" class="color-wrapper grid" :class="{'has-error': problems.length}">
        <div class="color" :style="{'background': model.hex}"></div>
        <q-btn color="primary" class="color-button">
          <q-icon name="search"></q-icon>
          <q-popover ref="popover">
            <sketch :value="model" @input="updateValue"></sketch>
          </q-popover>
        </q-btn>
      </div>
      <div v-show="!editable" class="html grid">
        <div class="color" :style="{'background': value}"></div>
      </div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/themes/phpzm/components/fields/components/base.vue'
  import FieldAbstract from 'src/themes/phpzm/components/fields/abstract'
  import { Sketch } from 'vue-color'

  export default {
    extends: FieldAbstract,
    components: {
      Field, Sketch
    },
    name: 'field-color',
    data: () => ({
      model: {
        hex: '#ffffff'
      }
    }),
    methods: {
      updateValue (color) {
        this.model.hex = color.hex
        this.$emit('input', color.hex)
      }
    },
    watch: {
      value (color) {
        this.model.hex = color
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .field-color
    .color-wrapper
      height 40px
    .color-button
      height 37px
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
