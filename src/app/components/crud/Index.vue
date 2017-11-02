<template>
  <app-card>
    <div slot="title">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
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
