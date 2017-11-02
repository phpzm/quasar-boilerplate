<template>
  <app-card>
    <div slot="title">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <div slot="content">
      <router-view></router-view>
    </div>
  </app-card>

</template>

<script type="text/javascript">
  import AppCard from 'src/app/components/card/AppCard.vue'

  export default {
    components: {
      AppCard
    },
    name: 'crud',
    props: {
      title: {
        default: ''
      }
    }
  }
</script>
