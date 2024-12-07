<template>
  <Navbar />
  <div id="container">
    <RouterView />
  </div>
</template>

<script setup>
import gsap from 'gsap'
import Lenis from 'lenis'
import '@/style/index.scss'
import Navbar from '@/components/Navbar.vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.1,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
router.beforeEach(async (to, from, next) => {
  if (to.path !== from.path) {
    animate()
  }
  next()
})
function animate() {
  const tl = gsap.timeline()
  let body = document.querySelector('#container')
  tl.to(body, {
    duration: 2,
    height: '75vh',
    width: 'calc(75vh * 1.73)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)', // Initial position
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: '8px',
    overflow: 'hidden',
    ease: 'power2.inOut',
  })
  tl.to(body, {
    duration: 2,
    width: '100%',
    height: '100%',
    border: 'none',
    overflow: 'unset',
    onComplete: function () {
      // Triggering a resize event after the animation completes
      window.dispatchEvent(new Event('resize'))
      console.log('resize')
    },
  })
}
</script>

<style lang="scss"></style>
