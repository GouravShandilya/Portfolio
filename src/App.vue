<template>
  <RouterView />
</template>

<script setup>
import '@/style/index.scss'
import Lenis from 'lenis'
import { RouterView } from 'vue-router'

const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.1,
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

<style lang="scss"></style>
