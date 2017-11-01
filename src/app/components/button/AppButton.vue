<template>
  <q-btn :icon="inherit" :color="color" :round="round" :class="{'raised': raised}" :outline="outline" @click="$emit('click')">
    <span v-if="label" v-html="label"></span>
    <q-icon v-else :name="icon"></q-icon>
  </q-btn>
</template>

<script type="text/javascript">
  import { QBtn, QIcon } from 'quasar-framework'

  export default {
    components: {
      QBtn, QIcon
    },
    computed: {
      inherit () {
        return this.label ? this.icon : ''
      }
    },
    props: {
      id: String,
      permission: Number,
      color: String,
      scopes: Array,
      positions: Array,
      outline: Boolean,
      round: Boolean,
      raised: Boolean,
      icon: String,
      label: String
    },
    name: 'q-button'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .q-btn.raised
    box-shadow 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12) !important
</style>
