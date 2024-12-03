<template>
  <RouterView />
</template>

<script setup>
import Lenis from 'lenis'
import { RouterView } from 'vue-router'

const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.2,
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
html.lenis {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}
html,
body {
  overflow-x: hidden;
}
</style>
