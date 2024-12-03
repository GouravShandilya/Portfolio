<template>
  <div>
    <div class="flex items-center justify-between sticky top-0 w-full z-10 navbar">
      <p class="py-2 px-2 text-lg sm:text-3xl sm:py-3 sm:px-6 font-light cursor-pointer">
        Gourav
        <span class="text-xl font-light font-mono">Shandilya</span>
      </p>
      <div class="gap-8 items-center hidden sm:flex">
        <p class="text-md py-3 px-6 font-light bg-gray-400 rounded-[25px]">Available for Work</p>
        <p
          class="text-md py-3 px-6 font-light bg-gray-200 rounded-[25px] connect"
          @click="handleClick('#footer')"
        >
          Connect
          <i class="ri-arrow-right-s-fill"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
function handleClick(to) {
  let from = document.querySelector(to)
  from.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
p {
  cursor: pointer;
}
</style>
