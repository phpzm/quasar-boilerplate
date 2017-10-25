<template>
  <common-card>
    <div slot="title">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <div slot="content">
      <router-view></router-view>
    </div>
  </common-card>

</template>

<script type="text/javascript">
  import CommonCard from 'src/app/common/card/index.vue'

  export default {
    components: {
      CommonCard
    },
    name: 'crud',
    props: {
      title: {
        default: ''
      }
    }
  }
</script>
