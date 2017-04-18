<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
  name: 'root',
  data: () => ({
    title: 'Title'
  }),
  created () {
    window.document.title = this.title
  }
}
</script>

<style></style>
