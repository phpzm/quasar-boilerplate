<template>
  <div class="common-form-actions">
    <q-button v-show="!action.hidden" v-for="action in actions" :key="action.id" v-bind="action"
              :disabled="isDisabled(action)" @click="handler(action)"></q-button>
  </div>
</template>

<script type="text/javascript">
  import QButton from 'src/app/common/button/Button.vue'

  const FormActions = {
    name: 'common-form-actions',
    components: {
      QButton
    },
    methods: {
      /**
       * @param {Object} action
       * @return {Boolean}
       */
      isDisabled (action) {
        if (action.disabled === true) {
          return action.disabled
        }
        if (typeof action.disabled === 'function') {
          return action.disabled(this.valid)
        }
        return false
      }
    },
    props: {
      actions: {
        type: Array,
        required: true
      },
      handler: {
        type: Function,
        required: true
      },
      valid: {
        type: Boolean,
        required: true
      }
    }
  }

  export default FormActions
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .common-form-actions
    button
      margin 0 5px
      &:last-child
        margin 0 0 0 5px
      &:first-child
        margin 0 5px 0 0
</style>
