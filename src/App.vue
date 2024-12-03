<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}
html,
body {
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>
