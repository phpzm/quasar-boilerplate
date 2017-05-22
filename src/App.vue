<template>
  <router-view></router-view>
</template>

<script>
  /*
   * Root component
   */
  export default {
    name: 'app-root',
    data: () => ({
      title: 'Title'
    }),
    created () {
      window.document.title = this.title
    }
  }
</script>

<style></style>
