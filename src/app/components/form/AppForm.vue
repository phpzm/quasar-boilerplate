<template>
  <div class="app-form">
    <!--<pre>{{ $v }}</pre>-->
    <q-tabs v-if="tabs.length">
      <!-- Tabs - notice slot="title" -->
      <q-tab v-for="tab in tabs" :key="tab.name" slot="title" v-bind="tab"/>
      <!-- Targets -->
      <q-tab-pane v-for="tab in tabs" :key="tab.name" :name="tab.name">
        <div class="form">
          <component v-for="schema in components[tab]" :key="schema.field" :is="schema.component" v-bind="schema"
                     v-model="record[schema.field]" @input="input(schema.field)" @event="event"></component>
        </div>
      </q-tab-pane>
    </q-tabs>
    <div v-else class="form">
      <component v-for="schema in schemas" :key="schema.field" :is="schema.component"
                 v-bind="schema" v-model="record[schema.field]" @input="input(schema.field)" @event="event"></component>
    </div>
  </div>
</template>

<script type="text/javascript">
  import 'src/app/components/fields'
  import { validationMixin } from 'vuelidate'
  import * as Validators from 'vuelidate/lib/validators'
  import { clone } from 'src/app/support/utils'

  export default {
    mixins: [validationMixin],
    name: 'app-form',
    props: {
      tabs: {
        type: Array,
        default: () => ([])
      },
      fields: {
        type: Array,
        default: () => ([])
      },
      data: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      components: {},
      schemas: {},
      record: {}
    }),
    validations () {
      const validations = this.generateValidations(this.fields)
      return {
        record: validations
      }
    },
    methods: {
      input (field) {
        if (this.$v.record[field]) {
          this.$v.record[field].$touch()
        }
        if (typeof this.schemas[field].change === 'function') {
          this.schemas[field].change(this.record, this.schemas, this)
        }
      },
      event (event, field) {
        // TODO: handler to generic events
      },
      /**
       * @param fields
       * @returns {Object}
       */
      generateValidations (fields) {
        if (!Array.isArray(fields)) {
          return {}
        }
        const validations = {}
        fields
          .filter(schema => !!schema.validate)
          .forEach(schema => {
            validations[schema.field] = this.configureValidation(schema.validate)
          })
        return validations
      },
      /**
       * @param {Object} validate
       * @return {Object}
       */
      configureValidation (validate) {
        const configure = {}
        Object.keys(validate).forEach(property => {
          let action = Validators[property]
          if (!action.length) {
            configure[property] = action
            return true
          }
          configure[property] = action((validate[property]))
        })
        return configure
      }
    },
    watch: {
      data (data) {
        this.record = clone(data)
      }
    },
    created () {
      const reduce = (accumulate, item) => {
        accumulate[item.field] = item
        return accumulate
      }
      this.schemas = this.fields.reduce(reduce, {})
      if (this.tabs.length) {
        const components = {}
        this.tabs.forEach(tab => {
          const filter = field => field.tab === tab.name
          components[tab.name] = this.fields.filter(filter).reduce(reduce, {})
        })
        this.components = components
      }
      Object.keys(this.schemas).forEach(field => {
        this.record[field] = this.schemas[field].default || this.$route.query[field]
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
