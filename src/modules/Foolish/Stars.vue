<template>
  <div class="sky">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div id="title"><span>Quasar</span><br><span>Boilerplate Demo</span></div>
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

<style lang="stylus" rel="stylesheet/stylus">
  multipleBoxShadow($n)
    random($min, $max)
      return '' + floor(math(0, 'random') * ($max - $min + 1) + $min)
    $value = random(1, 2000) + 'px ' + random(1, 2000) + 'px #FFF'
    for $i in 1..$n
      $value = $value + ',' + (random(1, 2000) + 'px ' + random(1, 2000) + 'px #FFF')
    return unquote($value)

  $shadows-small = multipleBoxShadow(700)
  $shadows-medium = multipleBoxShadow(200)
  $shadows-big = multipleBoxShadow(100)

  .sky
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)
    height: calc(100% + 8px)
    overflow: hidden
    margin: 0 -8px

  #stars
    width: 1px
    height: 1px
    background: transparent
    box-shadow: $shadows-small
    animation: animStar 50s linear infinite

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
    animation: animStar 100s linear infinite

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
    animation: animStar 150s linear infinite

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
    text-align: center
    font-family: 'lato', 'roboto', sans-serif
    font-weight: 400
    font-size: 50px
    letter-spacing: 10px

    margin-top: 60px
    padding-left: 10px

    span
      background: -webkit-linear-gradient(white, #38495a)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent

  @keyframes animStar
    from
      transform: translateY(0px)
    to
      transform: translateY(-2000px)
</style>
