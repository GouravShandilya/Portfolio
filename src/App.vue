<template>
  <RouterView />
</template>

<script setup>
import Lenis from 'lenis'
import { RouterView } from 'vue-router'

const lenis = new Lenis({
  wheelMultiplier: 0.5,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
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
