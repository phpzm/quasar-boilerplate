<template>
  <div class="app-button-bar" :style="style">
    <q-button v-if="permission(button, record)" v-for="button in buttons" :key="button.id" v-bind="button"
              @click="handler(button)">
      <app-tooltip :disable="!button.tooltip">{{ button.tooltip }}</app-tooltip>
    </q-button>
  </div>
</template>

<script type="text/javascript">
  import MixinPermission from 'src/themes/phpzm/components/@mixins/MixinPermission'

  export default {
    mixins: [
      MixinPermission
    ],
    name: 'app-button-bar',
    props: {
      buttons: {
        type: Array,
        required: true
      },
      handler: {
        type: Function,
        required: true
      },
      direction: {
        type: String,
        default: () => 'right'
      },
      record: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      style () {
        return {
          'text-align': this.direction
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .app-button-bar
    button
      margin 0 5px
    button:first-child
      margin 0 5px 0 0
    button:last-child
      margin 0 0 0 5px
</style>
