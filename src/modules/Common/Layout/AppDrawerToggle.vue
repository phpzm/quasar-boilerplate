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
    position absolute
    height 3px
    background #fff
    border-radius: 1px
    width 30px
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
    margin -9px 5px 0 5px
    width 21px
    height 21px
    border-radius 10px
    background #89bede
    border 3px solid #fff
</style>
