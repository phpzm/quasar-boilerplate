<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div v-show="editable" :class="{'has-error': problems.length}">
        <!--suppress HtmlFormInputWithoutLabel -->
        <textarea ref="input" :type="type" :name="name" :value="value" :placeholder="placeholder"
                  class="input full-width"
                  @keypress="keypress" @keyup="keyup" @mouseup="mouseup" @blur="blur" @focus="focus"
                  @keydown.enter.stop.prevent="enter"
                  @input="updateValue($event.target.value)"></textarea>
        <div class="input-bar"></div>
      </div>
      <div v-show="!editable" class="html" v-html="html"></div>
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
        return this.value
      }
    },
    extends: FieldAbstract,
    name: 'field-textarea'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-textarea
    small
      color #bdbdbd
    textarea
      min-height 100px
    .has-error textarea
      background rgba(249, 125, 125, 0.2)
    .html
      height 100px
      overflow hidden
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
</style>
