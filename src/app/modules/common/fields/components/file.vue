<template>
  <field :class="classNames"
         v-bind="{dependsIsOk, id, inline, problem, problems, label, validate, title, tooltip, editable}">
    <div slot="component">
      <!--@fail="fail" @finish="finish"  @start="start" -->
      <div v-if="download" style="padding: 10px 0">
        {{ uid }}
        <a href="#">{{ download }}</a>
      </div>
      <q-uploader ref="input" v-bind="options" @add="add" @uploaded="uploaded"></q-uploader>
    </div>
  </field>
</template>

<script type="text/javascript">
  import Field from 'src/app/modules/common/fields/components/field.vue'
  import FieldAbstract from 'src/app/modules/common/fields/abstract'
  import { URL_FILE_UPLOAD } from 'src/app/support/index'
  import { uid } from 'quasar-framework'

  export default {
    extends: FieldAbstract,
    components: {
      Field
    },
    name: 'field-file',
    props: {
      title: 'Este campo possui critérios de validação',
      name: {
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
      options () {
        return {
          name: this.name,
          url: this.url,
          extensions: this.extensions,
          additionalFields: [
            {
              name: 'name',
              value: this.name
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
    .error-message, .label-with-error
      color darkred
    .error-message
      font-size 12px
      i
        font-size 14px
        cursor pointer
</style>
