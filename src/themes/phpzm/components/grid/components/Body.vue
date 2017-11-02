<template>
  <div :class="classNames">
    <div class="grid-body" :style="style">
      <draggable v-model="order" :options="options">

        <div class="grid-row" v-for="record in records" :style="RowStyle">
          <div class="grid-options">
            <i class="draggable-handle" v-if="sortable">drag_handle</i>
            <!-- keyboard_arrow_right -->
            <q-fab color="primary" icon="settings" direction="right">
              <q-fab-action v-for="action in actions" :key="action.id" :disable="!editable" @click="handler(action, record)"
                            :class="[action.color, action.className]" :icon="action.icon">
                <q-tooltip>{{ action.label }}</q-tooltip>
              </q-fab-action>
            </q-fab>
          </div>
          <div class="grid-data grid">
            <div v-for="schema in schemas" :class="parseClassRow(schema)" :style="parseStyleRow(schema)">
              <label class="row-label" v-html="schema.label"></label>
              <span v-if="!schema.bind" v-html="formatColumn(schema.name, record)"></span>
              <field-funcional v-else v-bind="schema.bind"></field-funcional>
            </div>
          </div>
        </div>

      </draggable>
    </div>
  </div>
</template>

<script type="text/javascript">
  // https://github.com/SortableJS/Vue.Draggable
  import draggable from 'vuedraggable'
  import { get as _get } from 'lodash'
  import { mask } from 'src/app/support/utils/index'

  const GridBody = {
    components: {
      draggable
    },
    computed: {
      RowStyle () {
        const style = {
          'display': 'flex'
        }
        if (this.widthFields > 100) {
          style.display = 'inline-flex'
        }
        return style
      },
      classNames () {
        const classNames = []
        classNames.push(this.$options.name)
        return classNames
      },
      order: {
        get () {
          return this.records
        },
        set (order) {
          this.$emit('sorted', order)
        }
      },
      style () {
        const style = {}
        if (this.height) {
          style.height = this.height
          style.overflowY = 'scroll'
        }
        return style
      }
    },
    data: () => ({
      // https://github.com/RubaXa/Sortable
      options: {
        disabled: false,
        handle: '.draggable-handle',
        chosenClass: 'draggable-ghost',
        dragClass: 'sortable-drag'
      }
    }),
    methods: {
      /**
       * @param schema
       * @return Object
       */
      parseClassRow (schema) {
        return ['cell', schema.width ? 'has-' + schema.width : '']
      },
      /**
       * @param schema
       * @return Object
       */
      parseStyleRow (schema) {
        const style = schema.style ? schema.style.row : {}
        if (this.widthFields < 100) {
          return style
        }
        if (!schema.grid) {
          return style
        }
        return Object.assign({}, schema.grid.width, style)
      },
      /**
       * @param name
       * @param record
       * @return {*}
       */
      formatColumn (name, record) {
        let value = _get(record, name)
        const schemas = this.schemas.filter(_schema => _schema.name === name)
        if (!schemas.length) {
          return value
        }
        const schema = schemas[0]
        if (schema.format) {
          return schema.format(value, name, record)
        }
        if (schema.mask) {
          return mask(schema.mask, String(value))
        }
        return value
      }
    },
    mounted () {
      this.options.disabled = !this.sortable
    },
    name: 'app-grid-body',
    props: {
      schemas: {
        default: () => ([])
      },
      action: {
        default: () => ('')
      },
      actions: {
        default: () => ([])
      },
      records: {
        default: () => ([])
      },
      sortable: {
        default: false
      },
      editable: {
        default: true
      },
      height: {
        default: ''
      },
      widthFields: {
        type: Number
      },
      handler: {
        type: Function,
        required: true
      }
    },
    watch: {
      /**
       * @param sortable
       */
      sortable (sortable) {
        this.options.disabled = !sortable
      }
    }
  }

  export default GridBody
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-grid-body
    .draggable-ghost, .sortable-ghost, .sortable-drag
      opacity 1 !important
      background #cdcdcd !important
      border-color transparent !important
      box-shadow 0 1px 3px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.2), 0 -1px 2px rgba(0, 0, 0, 0.2)
    .grid-row
      min-height 50px
      font-size 14px
      padding 0 4px
      border-width 0 0 1px 0
      border-style solid
      border-color #ddd
      &:nth-child(odd)
        background-color rgba(204, 204, 204, 0.25)
      &:hover
        background-color rgba(204, 204, 204, 0.5)
      .grid-data
        padding 10px 5px 0 4px
        .row-label
          display none
          font-weight bold
          font-family Roboto
          color rgba(0, 0, 0, 0.54)
          font-size 13.6px
          text-transform uppercase
          &:after
            content: ': '
            margin 0 4px 0 0
      .grid-options
        display flex
        width 70px
      .cell
        padding 5px 10px
        white-space nowrap
        overflow hidden;
        text-overflow ellipsis

    .q-btn-round.q-btn-standard
      margin 5px 0 0 5px
      height 40px
      width 40px

  @media (max-width 768px)
    .app-grid-body
      .grid-row
        display block
        .grid-data
          .row-label
            display inline-block
          .cell
            text-align left !important

  .production
    .app-grid-body .grid-options
      .q-btn-round.q-btn-standard
        .q-icon, .q-btn-round.q-btn-standard .q-spinner
          margin 6px 0 0 0

</style>
