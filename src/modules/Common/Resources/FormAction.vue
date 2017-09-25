<template>
  <div class="form-action">
    <button v-for="__action in actions" :class="__action.classNames" @click="click(__action)">
      {{ __action.label }}
      <i v-if="__action.icon">{{ __action.icon }}</i>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'form-action',
    props: {
      actions: {
        default: () => ([])
      },
      perform: {
        default: () => {
          return (vm) => {
            vm.$parent.applyRecord()
          }
        }
      }
    },
    methods: {
      click (action) {
        action.click(this)
      },
      apply () {
        this.perform(this)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .form-action
    button
      margin 5px 10px 5px 0
</style>
