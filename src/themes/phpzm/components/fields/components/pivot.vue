<template>
  <field :class="classNames" v-bind="{id, inline, problems, label, validate, title, tooltip, editable, visible}">
    <div slot="component">
      <div v-show="editable" :class="{'has-error': problems.length}">
        <q-select ref="input" class="input full-width" :class="{'disabled': disable}"
                  v-model="model" multiple chips v-bind="{id, name, placeholder, disable, options: data}"
                  @change="triggerUpdateValue(model)"></q-select>
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
    name: 'field-pivot',
    props: {
      options: {
        default: () => ({})
      }
    },
    data: () => ({
      model: [],
      data: [],
      multi: false,
      updated: false
    }),
    computed: {
      html () {
        return this.model.map(item => item.label).join(', ')
      },
      disable () {
        return this.disabled
      }
    },
    methods: {
      getPivotOptions () {
        if (!this.options.reference) {
          return
        }
        this.$http
          .get(this.options.uri)
          .then(this.parseResponse)
      },
      parseResponse (response) {
        const body = this.$http.$body(response)
        if (!Array.isArray(body)) {
          return
        }

        const value = this.options.reference.value
        const label = this.options.reference.label
        let details = this.options.reference.details
        if (!details) {
          details = row => row[value]
        }

        const options = body.map(row => ({
          value: String(row[value]),
          label: row[label],
          details: details
        }))

        if (this.options.empty) {
          options.unshift({
            value: '',
            label: this.options.empty
          })
        }

        this.data = options
      },
      /**
       * @param model
       */
      triggerUpdateValue (model) {
        const value = model.map((item) => {
          const object = {}
          object[this.options.referenced] = item
          return object
        })
        this.updated = true
        this.updateValue(value)
        /*
        */
      },
      /**
       * @param value
       */
      applyValue (value) {
        if (!Array.isArray(value)) {
          return
        }
        this.model = value.map(item => String(item[this.options.referenced]))
      }
    },
    watch: {
      /**
       * @param value
       */
      value (value) {
        if (!this.updated) {
          this.applyValue(value)
          this.updated = true
        }
      }
    },
    created () {
      if (Array.isArray(this.options)) {
        this.data.push(...this.options)
      }
    },
    mounted () {
      if (this.options && this.options.uri) {
        this.getPivotOptions()
      }
      this.applyValue(this.value)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-pivot
    .input
      height auto
    .q-if-control
      position absolute
      right 0
      top 7px

  .field-pivot
    .q-if-disabled:before
      background none
    .q-select.q-if
      padding 6px 8px
    .has-error .q-picker-textfield
      background rgba(249, 125, 125, 0.2)
    .html
      height 36px
      color #515151
      padding 9px 8px
      font-family Roboto
      font-size 14.4px
</style>
