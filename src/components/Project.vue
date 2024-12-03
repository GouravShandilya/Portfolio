<template>
  <div class="one">
    <h3>Projects</h3>
    <div class="flex gap-3 flex-wrap items-center justify-center wrapp">
      <div class="w-[500px] h-[700px] card" v-for="i in 10">
        <img
          src="https://images.pexels.com/photos/28750711/pexels-photo-28750711/free-photo-of-cozy-autumn-flat-lay-with-tea-and-pumpkin.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline({ ease: "power1.inOut" });
  let card = gsap.utils.toArray(".card");
  card.forEach((card, index) => {
    tl.from(card, {
      duration: 1,
      y: "100%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".one",
        start: "13% 30%",
        end: "bottom 10%",
        scrub: true,
        markers: true,
      },
    });
  });
});
</script>

<style lang="scss" scoped></style>
