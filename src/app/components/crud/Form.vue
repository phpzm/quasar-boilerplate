<template>
  <div class="app-crud-grid">
    <app-button-bar :buttons="buttons.top" :handler="handler"/>
    <hr>
    <app-form v-bind="{fields, record}"></app-form>
    <hr>
    <app-button-bar :buttons="buttons.top" :handler="handler"/>
    <div class="fixed-bottom-right">
      <app-button-bar :buttons="buttons.floating" :handler="handler"/>
    </div>
  </div>
</template>

<script type="text/javascript">
  import AppForm from 'src/app/components/form/AppForm.vue'
  import { data, methods, props } from './model'
  import { populateForm } from 'src/bootstrap/settings'
  import AppButtonBar from '../button/AppButtonBar.vue'

  export default {
    components: {
      AppButtonBar,
      AppForm
    },
    mixins: [data, methods, props],
    name: 'app-crud-form',
    props: {
      scope: {
        default: () => 'view'
      }
    },
    data: () => ({
      fields: [],
      record: []
    }),
    methods: {
      /**
       */
      renderElements () {
      },
      /**
       * @param {AxiosResponse} response
       * @param {string} method
       */
      then (response, method) {
        const handlers = {
          read: (response) => populateForm(this, response)
        }
        if (handlers[method]) {
          handlers[method](response)
        }
      },
      /**
       * @param {AxiosError} error
       * @param {string} method
       * @param {Array} parameters
       */
      catch (error, method, parameters) {
        const handlers = {}
        if (handlers[method]) {
          handlers[method](error)
        }
      }
    },
    created () {
      this.renderAll()
    },
    mounted () {
      window.setTimeout(this.search, 100)
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
