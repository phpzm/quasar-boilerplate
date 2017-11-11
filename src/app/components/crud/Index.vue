<template>
  <app-card v-bind="{header: false, style: styles}">
    <router-view slot="content"></router-view>
  </app-card>
</template>

<script type="text/javascript">
  import AppCard from 'genesis/components/card/AppCard.vue'

  export default {
    components: {
      AppCard
    },
    name: 'app-crud',
    props: {
      classes: {
        default: () => ({})
      },
      styles: {
        default: () => ({})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
