<template>
  <field :class="classNames" v-bind="{dependsIsOk, id, inline, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <div id="editor" :class="{'html': !editable}">
        <froala :tag="'textarea'" :config="config" v-model="model"></froala>
      </div>
    </div>
  </field>
</template>

<script type="text/javascript">
  import { uid } from 'quasar-framework'
  import { mapGetters } from 'vuex'
  import { URL_IMAGE_MANAGER, URL_IMAGE_UPLOAD } from 'src/support/index'
  import 'vue-froala-wysiwyg'
  import Field from 'src/app/common/fields/components/field.vue'
  import FieldAbstract from 'src/app/common/fields/abstract'

  export default {
    components: {
      Field
    },
    computed: {
      ...mapGetters(['getAppHeight'])
    },
    data: () => ({
      model: '',
      updated: false,
      config: {
        events: {
          'froalaEditor.initialized' () {
            console.log('froalaEditor.initialized')
          }
        },
        language: 'pt_br',
        imagePaste: true,
        charCounterCount: true,
        placeholderText: 'test',
        toolbarStickyOffset: 50,
        height: this.getAppHeight - 200,
        imageManagerPageSize: 20,
        imageManagerLoadURL: URL_IMAGE_MANAGER,
        imageUploadURL: URL_IMAGE_UPLOAD,
        imageUploadParams: {
          uid: uid(),
          type: 'image'
        },
//        toolbarButtons: [
//          'undo', 'redo', '|',
//          'bold', 'italic', 'underline', 'strikeThrough', 'paragraphFormat', '|',
//          'subscript', 'superscript', '|',
//          'outdent', 'indent', '|',
//          'formatOL', 'formatUL', 'insertTable', 'insertLink', 'insertImage', '|',
//          'clearFormatting', 'html'
//        ],
        toolbarButtonsXS: ['undo', 'redo', '-', 'bold', 'italic', 'underline']
      }
    }),
    extends: FieldAbstract,
    name: 'field-wysiwyg',
    props: {
      title: {
        default: 'Este campo possui critérios de validação'
      }
    },
    mounted () {
      if (this.value) {
        this.model = this.value
      }
    },
    watch: {
      value () {
        if (!this.updated) {
          this.model = this.value
          this.updated = false
        }
      },
      model (value) {
        this.updated = true
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-wysiwyg
    .fr-wrapper
      min-height 300px
    small
      color #bdbdbd
    textarea
      min-height 100px
    .error-message, .label-with-error
      color darkred
    .error-message
      font-size 12px
      i
        font-size 14px
        cursor pointer
    .fr-toolbar
      border-top none
    .html
      height 100px
      overflow hidden
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
  .production
    .fr-wrapper > div:first-child
      display none
</style>
