<template>
  <section class="skills flex flex-col items-center justify-center gap-4 mt-[10rem]">
    <p class="text-center sm:mb-20 w-full">
      <span class="font px-2 py-5 text-[lg] sm:text-4xl header skillls">Skills</span>
    </p>
    <div>
      <div
        class="skill text-sm leading-loose sm:text-2xl sm:mb-20 sm:gap-12 gap-2 flex-wrap flex justify-center items-center relative"
      >
        <i class="cursor-pointer ri-reactjs-fill skills-img ri-4x"></i>
        <i class="cursor-pointer ri-vuejs-fill ri-4x skills-img"></i>
        <img
          src="@/assets/nuxt.svg"
          alt=""
          class="skills-img cursor-pointer w-[60px] sm:w-[100px] svg"
        />
        <i class="ri-nextjs-fill ri-4x skills-img"></i>
        <i class="cursor-pointer ri-tailwind-css-fill ri-4x skills-img"></i>
        <img
          src="@/assets/sass.svg"
          alt=""
          class="skills-img cursor-pointer w-[60px] sm:w-[100px] svg"
        />
      </div>
      <div
        class="skill sm:text-2xl sm:mb-20 flex justify-center items-center relative sm:gap-12 gap-2 text-sm leading-loose h-fit"
      >
        <i class="ri-javascript-fill ri-4x skills-img"></i>
        <i class="cursor-pointer ri-nodejs-fill ri-4x skills-img"></i>
        <i class="cursor-pointer ri-github-fill ri-4x skills-img"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'
onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.skills',
      start: '0% 50%',
      end: '85% 50%',
      scrub: true,
    },
  })
  tl.from('.skillls', {
    y: '70%',
    duration: 1,
    opacity: 0,
  })
  tl.from('.skills-img', {
    opacity: 0,
    y: 300,
    duration: 1,
    stagger: 0.2,
  })
})
</script>

<style scoped>
.ri-4x {
  color: #474747;
  animation: scrollTo 2s linear infinite;
}
img {
  animation: scrollTo 2s linear infinite;
}
.svg {
  filter: brightness(0) saturate(100%) invert(38%) sepia(55%) saturate(0%) hue-rotate(193deg);
}
@keyframes scrollTo {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
