<template>
  <app-card v-bind="{header: false}">
    <router-view slot="content"></router-view>
  </app-card>
</template>

<script type="text/javascript">
  import AppCard from 'src/app/components/card/AppCard.vue'

  export default {
    components: {
      AppCard
    },
    name: 'app-base',
    props: {
      title: {
        default: ''
      }
    }
  }
</script>
