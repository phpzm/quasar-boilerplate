<template>
  <div class="app-form">
    <q-tabs v-if="tabs.length">
      <!-- Tabs - notice slot="title" -->
      <q-tab v-for="tab in tabs" :key="tab.name" slot="title" v-bind="tab"/>
      <!-- Targets -->
      <q-tab-pane v-for="tab in tabs" :name="tab.name">
        <component v-for="field in fields[tab.name]" :key="field.field" :is="field.component"
                   v-bind="field" v-model="record[field.name]" @input="input(field.name)"></component>
      </q-tab-pane>
    </q-tabs>
    <div v-else :class="'form'">
      <component v-for="field in fields" :key="field.field" :is="field.component"
                 v-bind="field" v-model="record[field.name]" @input="input(field.name)"></component>
    </div>
  </div>
</template>

<script type="text/javascript">
  import * as Validators from 'vuelidate/lib/validators'

  export default {
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
        type: Array,
        default: () => ([])
      }
    },
    data: () => ({
      record: {}
    }),
    validations () {
      const validations = this.generateValidations(this.fields)
      return {
        record: validations
      }
    },
    methods: {
      input (name) {
        // react
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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
