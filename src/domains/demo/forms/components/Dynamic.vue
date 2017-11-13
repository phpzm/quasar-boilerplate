<template>
  <app-card>
    <div slot="title">
      <q-icon :name="icon"></q-icon>
      {{ label }}
    </div>
    <div slot="content">
      <br>
      <app-form v-bind="{fields, data}" @form~input="input" @form~valid="valid"></app-form>
      <hr>
      <app-button :disabled="!ok" color="primary">Dar a Salva</app-button>
      <hr>
      <h6>Debugger</h6>
      <app-debugger v-bind="{label: 'ok', inspect: ok}"></app-debugger>
      <app-debugger v-bind="{label: 'data', inspect: data}"></app-debugger>
      <app-debugger v-bind="{label: 'errors', inspect: errors}"></app-debugger>
      <hr>
    </div>
  </app-card>
</template>

<script type="text/javascript">
  import { mapActions } from 'vuex'
  import AppCard from 'genesis/components/card/AppCard.vue'
  import AppForm from 'genesis/components/form/AppForm.vue'
  import AppButton from 'genesis/components/button/AppButton.vue'

  export default {
    components: {
      AppCard, AppForm, AppButton
    },
    name: 'forms',
    data: () => ({
      icon: 'subtitles',
      label: 'Form Dinâmico',
      ok: false,
      errors: {},
      fields: [
        {
          component: 'field-text',
          field: 'id',
          label: 'ID',
          validate: {
            required: true
          }
        },
        {
          component: 'field-text',
          field: 'name',
          label: 'Nome',
          validate: {
            required: true
          }
        }
      ],
      data: {
        id: '',
        name: ''
      }
    }),
    methods: {
      /**
       * @param {Object} data
       */
      input (data) {
        this.data = data
      },
      /**
       * @param {boolean} status
       * @param {Object} errors
       */
      valid (status, errors) {
        this.ok = status === true
        this.errors = errors
      },
      ...mapActions(['setAppModified'])
    },
    watch: {
      model: {
        handler () {
          this.setAppModified(true)
        },
        deep: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
