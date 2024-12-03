<template>
  <div class="wrap">
    <div class="section-1 h-screen relative">
      <div class="text px-2 sm:flex">
        <h1 class="font mt-[4rem] relative sm:absolute sm:ml-[10vw]" ref="text">
          <span class="sm:ml-[10.4vw]">A FRONT END </span><br />DEVELOPER
          <br />WHO LOVES <br />DESIGN
        </h1>
        <img
          class="profile rounded-[30px] w-[100%] sm:ml-auto sm:w-[40%] mt-[3rem] img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/734e81d8-ee56-406d-a6ad-65a68916da85/dgmoq0q-1b62c95c-62f3-4368-846d-90bde1931734.jpg/v1/fill/w_894,h_894,q_70,strp/dragon_ball_goku_wallpaper__by_vnedit_dgmoq0q-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzczNGU4MWQ4LWVlNTYtNDA2ZC1hNmFkLTY1YTY4OTE2ZGE4NVwvZGdtb3EwcS0xYjYyYzk1Yy02MmYzLTQzNjgtODQ2ZC05MGJkZTE5MzE3MzQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MwlI35PHuNBXbpDweVwUJofj0mYQpMiZjJ9oIXam4tQ"
          alt=""
        />
        <i
          class="ri-scroll-to-bottom-line ri-2x img-1 text-gray-500 absolute transform -translate-x-1/2 left-1/2 bottom-10 hover:cursor-pointer hover:text-gray-900 hover:transition-ease"
        ></i>
      </div>
    </div>
    <div
      class="section-2 text-2xl ml-2 sm:ml-[10.4vw] mb-20 sm:flex justify-between"
    >
      <h3 class="sm:w-full w-[70%] font-[500]">
        I build digital platforms that keep the user connected.
      </h3>
      <p class="text-wrap-balance w-full sm:w-[40%] mt-8 sm:mt-4">
        In a digital world where the focus often lies on an efficient user
        experience, I want to add an extra layer of joy. I believe that is what
        leaves a lasting impression.
      </p>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";
const text = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(text.value, {
    opacity: 0,
    y: 300,
    duration: 1,
  });
  gsap.from(".img", {
    y: window.innerWidth > 648 ? 150 : 20,
    duration: 3.2,
    scrollTrigger: {
      trigger: ".wrap",
      start: "0% 10%",
      end: "bottom 80%",
      scrub: true,
    },
  });
});
</script>

<style scoped>
.font {
  font-size: clamp(3rem, 10.4vw - 3rem, 10.4vw - 3rem);
  line-height: clamp(3rem, 10.4vw - 3rem, 10.4vw - 3rem);
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  /* position: absolute; */
  z-index: 1;
}
</style>
