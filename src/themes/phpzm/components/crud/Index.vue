<template>
  <app-card v-bind="{header: false}">
    <router-view slot="content"></router-view>
  </app-card>
</template>

<script type="text/javascript">
  import AppCard from 'src/themes/phpzm/components/card/AppCard.vue'

  export default {
    components: {
      AppCard
    },
    name: 'app-crud',
    props: {
      title: {
        default: ''
      }
    }
  }
</script>
