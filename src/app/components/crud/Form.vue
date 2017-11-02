<template>
  <div class="app-crud-grid">
    <app-button-bar :buttons="buttons.top" :handler="handler" :direction="direction"/>
    <hr>
    <app-form ref="form" v-bind="{fields, data}" @input="data = $event" @form-valid="valid"></app-form>
    <hr>
    <app-button-bar :buttons="buttons.top" :handler="handler" :direction="direction"/>
    <div class="fixed-bottom-right">
      <app-button-bar :buttons="buttons.floating" :handler="handler"/>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { first } from 'src/app/infra/services/http/resource'
  import { populateForm } from 'src/bootstrap/settings'
  import AppForm from 'src/app/components/form/AppForm.vue'
  import AppButtonBar from 'src/app/components/button/AppButtonBar.vue'
  import { data, methods, props } from './model'

  export default {
    components: {
      AppForm, AppButtonBar
    },
    mixins: [data, methods, props],
    name: 'app-crud-form',
    props: {
      scope: {
        default: () => 'view'
      },
      handlers: {
        type: Object,
        default () {
          return {
            create: (response) => {
              this.browse(this.path + '/' + first(response)[this.id])
            },
            read: (response) => populateForm(this, response),
            delete: (response) => this.browse(this.path)
          }
        }
      }
    },
    data: () => ({
      fields: {},
      data: {},
      status: false
    }),
    methods: {
      /**
       */
      renderElements () {
        const map = item => {
          return Object.assign({}, item.form, {field: item.form.field})
        }
        const filter = item => item.scopes.includes(this.scope)

        this.fields = this.schemas.filter(filter).map(map)
      },
      /**
       * @param {AxiosError} error
       * @param {string} method
       * @param {Array} parameters
       */
      catch (error, method, parameters) {
        console.log('~>', this.$options.name, error)
      },
      /**
       * @param {boolean} valid
       */
      valid (valid) {
        this.status = valid
      }
    },
    watch: {
      status () {
        this.renderActions()
      }
    },
    created () {
      this.renderAll()
    },
    mounted () {
      if (this.id && this.$route.params[this.id]) {
        const fetch = () => {
          this.read(this.$route.params[this.id])
        }
        window.setTimeout(fetch, 100)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-crud-grid
    padding 16px 0 0 0
    hr
      margin 10px 0
    .fixed-bottom-right
      margin 0 20px 10px 0
</style>
