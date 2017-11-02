<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-if="download" class="file-link">
        <a href="#">{{ download }}</a>
      </div>
      <q-uploader ref="input" v-bind="bind" @add="add" @uploaded="uploaded"></q-uploader>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/themes/phpzm/components/fields/components/base.vue'
  import FieldAbstract from 'src/themes/phpzm/components/fields/abstract'
  import { URL_FILE_UPLOAD } from 'src/app/support/index'
  import { uid } from 'quasar-framework'

  export default {
    extends: FieldAbstract,
    components: {
      Field
    },
    name: 'field-file',
    props: {
      file: {
        default: 'file'
      },
      url: {
        default: URL_FILE_UPLOAD
      },
      extensions: {
        default: ''
      }
    },
    data: () => ({
      download: undefined,
      uid: ''
    }),
    computed: {
      /**
       * @return {Object}
       */
      bind () {
        return {
          name: this.file,
          url: this.url,
          extensions: this.extensions,
          additionalFields: [
            {
              name: 'name',
              value: this.file
            },
            {
              name: 'uid',
              value: this.uid
            }
          ]
        }
      }
    },
    methods: {
      /**
       */
      add () {
        // noinspection JSUnresolvedVariable
        window.setTimeout(this.$refs.input.upload, 500)
      },
      uploaded (file, xhr) {
        let path = ''
        try {
          const response = JSON.parse(xhr.response)
          path = response.path
        }
        catch (e) {
          return
        }
        this.download = ''
        this.$emit('input', path)
      }
    },
    watch: {
      value (value) {
        if (this.download === undefined) {
          this.uid = String(value).split('/').pop().split('.').shift()
          this.download = value
        }
      }
    },
    mounted () {
      this.uid = uid()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-file
    .file-link
      padding 10px 0
</style>
