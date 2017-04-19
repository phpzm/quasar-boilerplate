<template>
  <div :class="classNames">
    <label class="menu-toggle" @click="open">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </label>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'app-drawer-toggle',
    props: ['side', 'drawer'],
    data: () => ({
    }),
    computed: {
      classNames () {
        return ['button-toggle', this.side]
      }
    },
    methods: {
      open () {
        this.drawer.open()
      }
    },
    mounted () {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .menu-toggle
    display block
    position relative
    width 30px
    height 20px
    margin 16px
    border-radius: 2px
    transition all .25s
    cursor pointer
  .icon-bar
    display block
    height 3px
    background #fff
    border-radius: 1px
    width 30px
    margin 5px 0
    transform rotate(0deg)
    transition all .25s
  .button-toggle
    position fixed
    z-index 2
    top 0
    &.left
      left 0
    &.right
      right 0

  .button-toggle:hover .icon-bar
    /*top 16px*/
    position absolute
  .button-toggle.left:hover .icon-bar:nth-child(1),
  .button-toggle.left:hover .icon-bar:nth-child(3)
    transform translate(-95px, 0)
    opacity 0
  .button-toggle.right:hover .icon-bar:nth-child(1),
  .button-toggle.right:hover .icon-bar:nth-child(3)
    transform translate(95px, 0)
    opacity 0
  .button-toggle:hover .icon-bar:nth-child(2)
    top 0
    margin 0 5px
    width 20px
    height 20px
    border-radius 10px
</style>
