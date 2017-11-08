<template>
  <div class="app-grid-filter">
    <div class="text-right">
      <span>
        <q-icon class="cursor-pointer app-grid-filter-closer" name="cancel" @click="$emit('close')"></q-icon>
        <app-tooltip>Fechar o painel de filtros</app-tooltip>
      </span>
    </div>
    <hr class="light">
    <div class="app-grid-filter-header">
      <h6>Filtros</h6>
    </div>
    <hr class="light">
    <div class="app-grid-filter-form form">
      <component v-for="filter in filters" :key="filter.field" :is="filter.component"
                 v-model="record[filter.field]" v-bind="filter"></component>
    </div>
    <hr>
    <div class="form">
      <div class="field has-100 text-right app-grid-filter-buttons">
        <span>
          <q-btn color="primary" @click="$emit('apply')">Pesquisar</q-btn>
          <app-tooltip>Aplica a pesquisa a lista</app-tooltip>
        </span>
        <span>
          <q-btn color="white" @click="$emit('clear')">Limpar</q-btn>
          <app-tooltip>Limpa os dados da pesquisa</app-tooltip>
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'app-grid-filter',
    props: {
      filters: {
        type: Array,
        required: true
      },
      record: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-grid-filter
    .app-grid-filter-closer
      font-size 24px
      margin 5px 10px
      color #b10000
    .app-grid-filter-header
      padding 5px 20px
    .app-grid-filter-form
      padding 0 20px
      margin -10px 0 -20px 0
      background #fafafa
    .app-grid-filter-buttons
      padding 0 20px
      span
        margin 0 5px
      span:first-child
        margin 0 5px 0 0
      span:last-child
        margin 0 0 0 5px
</style>
