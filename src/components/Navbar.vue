<template>
  <div>
    <div class="flex items-center justify-between sticky top-0 w-full z-10 navbar">
      <p class="py-2 px-2 text-lg sm:text-3xl sm:py-3 sm:px-6 font-light cursor-pointer">
        Gourav
        <span class="text-xl font-light font-mono">Shandilya</span>
      </p>
      <div class="flex items-center gap-3">
        <button @click="ToggleEvent()">
          <i class="ri-moon-fill ri-xl cursor-pointer" v-if="!isDark"></i>
          <i class="ri-sun-fill ri-xl cursor-pointer" v-else></i>
        </button>
        <div class="gap-8 items-center hidden sm:flex">
          <p class="text-md py-3 px-6 font-light border rounded-[25px]">Available for Work</p>
          <p
            class="text-md py-3 px-6 font-light border rounded-[25px] connect"
            @click="handleClick('#footer')"
          >
            Connect
            <i class="ri-arrow-right-s-fill"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isDark = ref(false)

function handleClick(to) {
  let from = document.querySelector(to)
  from.scrollIntoView({ behavior: 'smooth' })
}

function getDeviceColorScheme() {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
}
onMounted(() => {
  ToggleEvent()
})
getDeviceColorScheme()
function ToggleEvent() {
  let val = isDark.value ? 'dark' : 'light'
  isDark.value = !isDark.value
  document.querySelector('html').setAttribute('data-theme', val)
}
</script>

<style scoped>
p {
  cursor: pointer;
}
</style>
