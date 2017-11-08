<template>
  <q-btn :icon="inherit" v-bind="{color, round, outline, flat}" :class="{'raised': raised, 'rotate': rotate}"
         @click="$emit('click')">
    <span v-if="label" v-html="label"></span>
    <q-icon v-else :name="icon"></q-icon>
    <slot></slot>
  </q-btn>
</template>

<script type="text/javascript">
  export default {
    name: 'q-button',
    computed: {
      inherit () {
        return this.label ? this.icon : ''
      }
    },
    props: {
      id: {
        type: String,
        default: () => ''
      },
      permission: {
        default: () => 0
      },
      color: {
        type: String,
        default: () => ''
      },
      scopes: {
        type: Array,
        default: () => ([])
      },
      positions: {
        type: Array,
        default: () => ([])
      },
      outline: {
        type: Boolean,
        default: () => false
      },
      round: {
        type: Boolean,
        default: () => false
      },
      rotate: {
        type: Boolean,
        default: () => true
      },
      raised: {
        type: Boolean,
        default: () => false
      },
      flat: {
        type: Boolean,
        default: () => false
      },
      icon: {
        type: String,
        default: () => ''
      },
      label: {
        type: String,
        default: () => ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .q-btn.raised
    box-shadow 0 1px 5px rgba(0, 0, 0, .2), 0 2px 2px rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12) !important
</style>
