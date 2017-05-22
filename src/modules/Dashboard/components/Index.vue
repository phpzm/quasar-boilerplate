<template>
  <div class="app-content" style="position: relative">
    <div class="toolbar sub-toolbar">
      Home
    </div>
    <div class="app-container">
      Home
      {{ record }}
      <component v-for="__schema in schemas" :is="__schema['component']" :schema="__schema"
                 v-model="record[__schema.field]"></component>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { schemas, record } from 'src/modules/Dashboard/model/Aluno'

  export default {
    name: '',
    props: {},
    data: () => ({
      record: record,
      schemas: schemas
    }),
    computed: {},
    methods: {},
    created () {
    },
    mounted () {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
