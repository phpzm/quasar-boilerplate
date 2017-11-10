<template>
  <div class="app-form">
    {{ tabDefault }}
    <q-tabs v-if="tabs.length" v-model="tabDefault" inverted>
      <!-- Tabs - notice slot="title" -->
      <q-tab v-for="tab in tabs" :key="tab.name" slot="title" v-bind="tab"/>

      <div class="q-tabs-panes">
        <div v-show="tabDefault === tab.name" v-for="tab in tabs" :key="tab.name" :name="tab.name" class="q-tabs-pane">
          <div class="form">
            <component v-for="schema in components[tab.name]" :key="schema.field" :is="schema.component"
                       v-bind="schema" v-model="record[schema.field]"
                       @input="formInput(schema.field)" @event="formEvent"></component>
          </div>
        </div>
      </div>
    </q-tabs>
    <div v-else class="form">
      <component v-for="schema in schemas" :key="schema.field" :is="schema.component"
                 v-bind="schema" v-model="record[schema.field]"
                 @input="formInput(schema.field)" @event="formEvent"></component>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { validationMixin as validation } from 'vuelidate'
  import { data, methods, props, watch } from './model'

  export default {
    mixins: [validation, data, methods, props, watch],
    name: 'app-form',
    validations () {
      const validations = this.generateValidations(this.fields)
      return {
        record: validations
      }
    },
    created () {
      this.updateComponents()
      this.updateSchemas()
      this.updateRecord()

      this.tabDefault = this.tab
      if (!this.tab) {
        this.tabDefault = (Array.isArray(this.tabs) && this.tabs[0]) ? this.tabs[0].name : ''
      }
      if (this.$route.query.tab) {
        this.tabDefault = this.$route.query.tab
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .app-form
    font-family Roboto
</style>
