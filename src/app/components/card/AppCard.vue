<template>
  <div class="app-card">
    <slot name="top"></slot>
    <q-card>
      <q-card-title class="q-card--title">
        <slot name="title">
          <q-icon :name="icon"></q-icon> <span v-html="title"></span>
        </slot>
      </q-card-title>
      <q-card-separator v-if="separator"/>
      <q-card-main class="q-card--main">
        <slot name="content"></slot>
      </q-card-main>
    </q-card>
    <slot name="bottom"></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'app-card',
    props: {
      title: {
        default: ''
      },
      icon: {
        default: ''
      },
      separator: {
        default: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-card
    & > .q-card
      background #ffffff
      & .q-card--title
        min-height 60px
        font-family play
      & .q-card--main
        padding-top 0
</style>
