<template>
  <div class="app-debugger">
    <details>
      <summary>{{ label }}</summary>
      <div class="pre debug" v-html="beautify(inspect)"></div>
    </details>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'app-debugger',
    props: ['label', 'inspect'],
    methods: {
      beautify (json) {
        if (!json) {
          json = {}
        }
        json = JSON.stringify(json, undefined, 4)
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')

        /* eslint-disable no-useless-escape */
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          let cls = 'number'
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key'
            }
            else {
              cls = 'string'
            }
          }
          else if (/true|false/.test(match)) {
            cls = 'boolean'
          }
          else if (/null/.test(match)) {
            cls = 'null'
          }
          return '<span class="' + cls + '">' + match + '</span>'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-debugger
    border: 1px dotted #d0d0d0
    margin: 10px 0
    padding: 10px
    border-radius: 2px
    summary
      cursor: pointer
      padding: 5px 10px
    .pre
      overflow: auto
      white-space: pre
      .string
        color: #885800
      .number
        color: blue
      .boolean
        color: magenta
      .null
        color: red
      .key
        color: green
</style>
