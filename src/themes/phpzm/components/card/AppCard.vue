<template>
  <div class="app-card">
    <slot name="top"/>
    <q-card>
      <q-card-title v-if="header" class="q-card--title">
        <slot name="title">
          <q-icon :name="icon"/> <span v-if="label" v-html="label"/><span v-if="title" v-html="title"/>
        </slot>
      </q-card-title>
      <q-card-separator v-if="separator"/>
      <q-card-main class="q-card--main">
        <slot name="content"/>
      </q-card-main>
    </q-card>
    <slot name="bottom"/>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'app-card',
    props: {
      label: {
        default: ''
      },
      title: {
        default: ''
      },
      icon: {
        default: ''
      },
      separator: {
        default: true
      },
      header: {
        default: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .app-card
    & > .q-card
      background #ffffff
      & .q-card--title
        min-height 60px
      & .q-card--main
        padding-top 0
        overflow auto
</style>
