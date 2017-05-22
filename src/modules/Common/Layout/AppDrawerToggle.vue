<template>
  <div :class="classNames">
    <label class="menu-toggle" @click="open">
      <span class="icon-bar"></span>
      <span class="icon-bar">
        <i>arrow_forward</i>
      </span>
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
    position absolute
    height 3px
    overflow hidden
    background #fff
    border-radius: 1px
    width 30px
    transform rotate(0deg)
    transition all .25s
    i
      color #627f9e
      margin 6px
      font-size 1px
      transition all .3s
  .button-toggle
    position fixed
    z-index 2
    top 0
    &.left
      left 0
    &.right
      right 0
      i
        transform rotate(180deg)

  .icon-bar:nth-child(1)
    top 0
  .icon-bar:nth-child(2)
    top 7px
  .icon-bar:nth-child(3)
    top 14px
  .button-toggle.left:hover .icon-bar:nth-child(1),
  .button-toggle.left:hover .icon-bar:nth-child(3)
    transform translate(-45px, 0)
    opacity 0
  .button-toggle.right:hover .icon-bar:nth-child(1),
  .button-toggle.right:hover .icon-bar:nth-child(3)
    transform translate(45px, 0)
    opacity 0
  .button-toggle:hover .icon-bar:nth-child(2)
    margin -14px 0 0 0
    height 30px
    border-radius 15px
    i
      font-size 18px
</style>
