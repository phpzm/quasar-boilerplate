<template>
  <div class="common-card">
    <slot name="top"></slot>
    <q-card>
      <q-card-title class="q-card--title">
        <slot name="title">
          <span v-html="title"></span>
        </slot>
      </q-card-title>
      <q-card-main class="q-card--main">
        <slot name="content"></slot>
      </q-card-main>
    </q-card>
    <slot name="bottom"></slot>
  </div>
</template>

<script type="text/javascript">
  import { QCard, QCardTitle, QCardMain } from 'quasar-framework'

  export default {
    components: {
      QCard, QCardTitle, QCardMain
    },
    name: 'common-card',
    props: {
      title: ''
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .common-card
    padding 20px
    & > .q-card
      background #ffffff
      & .q-card--title
        min-height 60px
        font-family play
      & .q-card--main
        padding-top 0
</style>
