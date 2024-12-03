<template>
  <section
    class="skills flex flex-col items-center justify-center gap-4 mt-[10rem]"
  >
    <p class="text-center sm:mb-20 w-full">
      <span class="font px-2 py-5 text-[2rem] sm:text-[4rem]">Skills</span>
    </p>
    <div>
      <div
        class="skill text-sm leading-loose sm:text-2xl sm:mb-20 sm:gap-12 gap-2 flex-wrap flex justify-center items-center relative"
      >
        <i class="cursor-pointer ri-reactjs-fill skills-img ri-4x"></i>
        <i class="cursor-pointer ri-vuejs-fill ri-4x skills-img"></i>
        <img
          src="https://nuxt.com/assets/design-kit/icon-black.svg"
          alt=""
          class="skills-img cursor-pointer w-[60px] sm:w-[100px]"
        />
        <i class="cursor-pointer ri-tailwind-css-fill ri-4x skills-img"></i>
        <img
          src="@/assets/sass.svg"
          alt=""
          class="skills-img cursor-pointer w-[60px] sm:w-[100px]"
        />
      </div>
      <div
        class="skill sm:text-2xl sm:mb-20 flex justify-center items-center relative sm:gap-12 gap-2 text-sm leading-loose h-fit"
      >
        <i class="ri-javascript-fill ri-4x skills-img"></i>
        <i class="cursor-pointer ri-nodejs-fill ri-4x skills-img"></i>
        <i class="cursor-pointer ri-github-fill ri-4x skills-img"></i>
        <!-- <img
          src="https://assets.codepen.io/16327/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1697554632&width=256"
          alt=""
          class="skills-img cursor-pointer w-[100px]"
        /> -->
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.font {
  /* font-size: clamp(2rem, 15.4vw - 1rem, 15.4vw - 2rem); */
  /* line-height: clamp(2rem, 15.4vw - 1rem, 15.4vw - 2rem); */
  /* transform: translateX(-50%); */
  /* margin-left: 10vw; */
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  /* position: absolute; */
  /* z-index: 1; */
}
.ri-4x,
img,
svg {
  opacity: 0.6;
  animation: scrollTo 2s linear infinite;
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
