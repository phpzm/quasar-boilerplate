<template>
  <div ref="wrapper" class="transition-slide" :style="{width: width, height: height}">
    <transition :name="transition">
      <router-view class="router-view" :key="key" :style="style"></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
  import { Events, uid } from 'quasar-framework'

  export default {
    name: 'app-transition-slide',
    props: {
      width: {
        default: '100%'
      },
      height: {
        default: '100%'
      },
      padding: {
        default: '0'
      },
      margin: {
        default: '0'
      }
    },
    data: () => ({
      key: uid(),
      transition: 'slide-left'
    }),
    computed: {
      style () {
        return {
          width: this.width,
          height: this.height,
          padding: this.padding,
          margin: this.margin
        }
      }
    },
    methods: {
      updateTransition (from, to) {
        this.key = uid()
        if (from === to) {
          this.transition = ''
          return
        }
        const fromDepth = String(from).split('/').length
        const toDepth = String(to).split('/').length
        this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    created () {
      Events.$on('app.route.update', this.updateTransition)
      Events.$on('app.route.before', (to, path) => {
        this.$refs.wrapper.scrollTop = 0
      })
    },
    destroyed () {
      Events.$off('app.route.update')
      Events.$off('app.route.before')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .transition-slide
    position relative
    overflow-y scroll
    overflow-x hidden
    .router-view
      position absolute
      transition transform .1s

  .slide-left-enter
    transform translate(100%, 0)

  .slide-left-leave-to
    transform translate(-100%, 0)

  .slide-right-enter
    transform translate(-100%, 0)

  .slide-right-leave-to
    transform translate(100%, 0)
</style>
