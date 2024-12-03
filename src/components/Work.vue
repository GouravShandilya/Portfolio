<template>
  <div class="wrap relative">
    <div class="work relative h-screen w-full grid place-items-center">
      <div
        class="card h-[250px] sm:h-[300px] w-full sm:w-[450px] rounded-[40px] bg-transparent sm:bg-gray-200 shadow-md sm:opacity-15"
      >
        <img
          src="https://www.shutterstock.com/image-photo/generates-strong-goku-image-dragon-600nw-2440374683.jpg"
          alt=""
          class="h-full w-full object-cover rounded-[40px]"
        />
      </div>
      <div
        class="texxt absolute transform -translate-x-1/2 left-1/2 translate-y-1/2 top-1/2"
      >
        Work
      </div>
    </div>
    <ProjectContainer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ProjectContainer from "./ProjectContainer.vue";
// import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  let tl = gsap.timeline();
  tl.from(".texxt", {
    scale: window.innerWidth > 648 ? 1.5 : 4,
    duration: 5,
    scrollTrigger: {
      trigger: ".work",
      start: "-2% 60%",
      end: "50% 50%",
      scrub: true,
    },
  });
});
</script>

<style scoped>
.texxt {
  font-family: "Poppins", sans-serif;
  font-size: clamp(3rem, 13vw - 1rem, 13vw - 3rem);
  line-height: clamp(3rem, 12.4vw - 1rem, 12.4vw - 3rem);
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  /* margin-left: 10vw; */
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  /* mix-blend-mode: exclusion; */
}
</style>
