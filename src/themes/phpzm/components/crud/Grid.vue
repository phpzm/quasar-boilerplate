<template>
  <div class="app-crud-grid" :class="{'--grid-filtering': filter.active}">
    <app-button-bar :buttons="buttons.top" :handler="handler" :direction="direction"/>
    <hr>
    <app-data-table ref="grid" v-bind="{columns, data, debug, actions: buttons.middle}"></app-data-table>
    <hr>
    <app-button-bar :buttons="buttons.top" :handler="handler" :direction="direction"/>
    <div class="fixed-bottom-right">
      <app-button-bar :buttons="buttons.floating" :handler="handler"/>
    </div>

    <q-modal ref="filter" position="right" :content-css="filter.css">
      <app-grid-filter :filters="filter.columns" :record="filter.record"
                       @close="filterClose" @apply="filterApply" @clear="filterClear"></app-grid-filter>
    </q-modal>

    <template v-if="debugging">
      <app-debugger v-bind="{label: 'data', inspect: data}"></app-debugger>
      <app-debugger v-bind="{label: 'columns', inspect: columns}"></app-debugger>
      <app-debugger v-bind="{label: 'filter', inspect: filter.record}"></app-debugger>
    </template>
  </div>
</template>

<script type="text/javascript">
  import AppDataTable from 'src/themes/phpzm/components/data-table/AppDataTable.vue'
  import AppButtonBar from 'src/themes/phpzm/components/button/AppButtonBar.vue'
  import AppDebugger from 'src/themes/phpzm/components/debugger/AppDebugger.vue'
  import AppGridFilter from 'src/themes/phpzm/components/crud/components/grid/AppGridFilter'
  import { MixinData, MixinMethods, MixinProps } from './model'
  import { MixinGrid, MixinFilter } from './model/grid'

  export default {
    components: {
      AppDataTable, AppButtonBar, AppGridFilter, AppDebugger
    },
    mixins: [
      MixinData, MixinMethods, MixinProps, MixinGrid, MixinFilter
    ],
    name: 'app-crud-grid'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-crud-grid
    padding 16px 0 0 0
    &.--grid-filtering
      .--button-filter
        background darkred !important
        i
          color white !important
    hr
      margin 10px 0
    .fixed-bottom-right
      margin 5px
</style>
