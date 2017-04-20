<template>
  <div class="sky">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <slot></slot>
    <!--<div id="title">-->
      <!--<span>Rápido</span>-->
      <!--<br>-->
      <!--<span>Elegante</span>-->
      <!--<br>-->
      <!--<span>Simples</span>-->
      <!--<br>-->
    <!--</div>-->
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'stars',
    props: {},
    data: () => ({}),
    computed: {},
    methods: {},
    created () {
    },
    mounted () {
    }
  }
</script>

<style lang="sass">
  // http://codepen.io/saransh/pen/BKJun
  // n is number of stars required
  @function multiple-box-shadow ($n)
    $value: '#{random(2000)}px #{random(2000)}px #FFF'
    @for $i from 2 through $n
      $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF'
    @return unquote($value)

  $shadows-small:  multiple-box-shadow(700)
  $shadows-medium: multiple-box-shadow(200)
  $shadows-big:    multiple-box-shadow(100)

  .sky
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)
    height: 100%
    width: 100%
    position: absolute
    overflow: hidden

    #stars
      width: 1px
      height: 1px
      background: transparent
      box-shadow: $shadows-small
      animation: animationStars 25s linear infinite

      &:after
        content: " "
        position: absolute
        top: 2000px
        width: 1px
        height: 1px
        background: transparent
        box-shadow: $shadows-small

    #stars2
      width: 2px
      height: 2px
      background: transparent
      box-shadow: $shadows-medium
      animation: animationStars 50s linear infinite

      &:after
        content: " "
        position: absolute
        top: 2000px
        width: 2px
        height: 2px
        background: transparent
        box-shadow: $shadows-medium

    #stars3
      width: 3px
      height: 3px
      background: transparent
      box-shadow: $shadows-big
      animation: animationStars 75s linear infinite

      &:after
        content: " "
        position: absolute
        top: 2000px
        width: 3px
        height: 3px
        background: transparent
        box-shadow: $shadows-big

    #title
      color: #FFF
      text-align: right
      font-family: lato, sans-serif
      font-weight: 300
      font-size: 50px
      letter-spacing: 10px

      margin-top: 30%
      padding-left: 10px

      span
        /*text-transform: uppercase*/
        background: -webkit-linear-gradient(white, #38495a)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent

    @keyframes animationStars
      from
        transform: translateY(0px)
      to
        transform: translateY(-2000px)
</style>
