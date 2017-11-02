<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-show="editable" :class="{'has-error': problems.length}">
        <textarea ref="input" class="input full-width" autocomplete="off"
                  v-bind="{id, name, placeholder, maxlength, disabled}"
                  @keypress="keypress" @keyup="keyup" @blur="blur" @focus="focus" @keydown.enter.stop.prevent="enter"
                  @input="updateValue($event.target.value)"></textarea>
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
    name: 'field-textarea',
    computed: {
      html () {
        return this.value
      }
    }
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
