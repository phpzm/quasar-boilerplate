<template>
  <div>
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
          return () => {
            console.warn('perform is not defined')
          }
        }
      }
    },
    methods: {
      click (action) {
        action.click(this)
      },
      apply () {
        this.perform.call()
      }
    }
  }
</script>

<style>

</style>
