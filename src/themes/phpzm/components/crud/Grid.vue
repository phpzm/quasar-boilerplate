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
      <div class="text-right">
        <q-btn round small color="tertiary" icon="close" @click="filterClose()" class="btn-x-small"></q-btn>
      </div>
      <hr class="light">
      <h6>Filtros</h6>
      <div class="form">
        <component v-for="bind in filter.columns" :key="bind.field" :is="bind.component"
                   v-model="filter.record[bind.field]" v-bind="bind"></component>
      </div>
      <hr>
      <div class="form">
        <div class="field has-100 text-right">
          <q-btn color="primary" icon="search" @click="filterApply">Pesquisar</q-btn>
          <q-btn color="white" icon="cancel" @click="filterClear">Limpar</q-btn>
        </div>
      </div>
    </q-modal>

    <template v-if="debug">
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
  import { MixinData, MixinMethods, MixinProps } from './model'
  import { MixinGrid, MixinFilter } from './model/grid'

  export default {
    components: {
      AppDataTable, AppButtonBar, AppDebugger
    },
    mixins: [
      MixinData, MixinMethods, MixinProps, MixinGrid, MixinFilter
    ],
    name: 'app-crud-grid'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~variables'

  .app-crud-grid
    padding 16px 0 0 0
    &.--grid-filtering
      .--button-filter
        background $negative !important
        i
          color white !important
    hr
      margin 10px 0
    .fixed-bottom-right
      margin 0 20px 10px 0
</style>
