<template>
  <div class="wrapper relative h-screen w-full">
    <div
      class="workk rounded-sm bg-red-200 h-fit sm:h-[49%] w-[32%] relative"
      @click="add"
    >
      <div
        class="workk-overlay absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] text-white h-full w-full grid place-items-center cursor-pointer"
      >
        <a
          href="#"
          class="text-white no-underline bg-gray-600 px-4 py-2 rounded-[20px] uppercase text-sm"
          >Open Project <i class="ri-arrow-right-up-line ml-1"></i
        ></a>
      </div>
      <img
        class="rounded-md h-full w-full aspect-auto object-cover"
        src="https://images.pexels.com/photos/28935322/pexels-photo-28935322/free-photo-of-delicate-dandelions-in-soft-focus-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
    <div class="workk rounded-sm bg-red-300 h-fit sm:h-[49%] w-[32%] relative">
      <div
        class="workk-overlay absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] text-white h-full w-full grid place-items-center cursor-pointer"
      >
        <a
          href="#"
          class="text-white no-underline bg-gray-600 px-4 py-2 rounded-[20px] uppercase text-sm"
          >Open Project <i class="ri-arrow-right-up-line ml-1"></i
        ></a>
      </div>
      <img
        class="rounded-md h-full w-full aspect-auto object-cover"
        src="https://images.pexels.com/photos/28750711/pexels-photo-28750711/free-photo-of-cozy-autumn-flat-lay-with-tea-and-pumpkin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
    <div class="workk rounded-sm bg-red-400 h-fit sm:h-[49%] w-[32%] relative">
      <div
        class="workk-overlay absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] text-white h-full w-full grid place-items-center cursor-pointer"
      >
        <a
          href="#"
          class="text-white no-underline bg-gray-600 px-4 py-2 rounded-[20px] uppercase text-sm"
          >Open Project <i class="ri-arrow-right-up-line ml-1"></i
        ></a>
      </div>
      <img
        class="rounded-md h-full w-full aspect-auto object-cover"
        src="https://images.pexels.com/photos/28435070/pexels-photo-28435070/free-photo-of-ancient-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
    <div class="workk rounded-sm bg-red-200 h-fit sm:h-[49%] w-[32%] relative">
      <div
        class="workk-overlay absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] text-white h-full w-full grid place-items-center cursor-pointer"
      >
        <a
          href="#"
          class="text-white no-underline bg-gray-600 px-4 py-2 rounded-[20px] uppercase text-sm"
          >Open Project <i class="ri-arrow-right-up-line ml-1"></i
        ></a>
      </div>
      <img
        class="rounded-md h-full w-full aspect-auto object-cover"
        src="https://images.pexels.com/photos/28904025/pexels-photo-28904025/free-photo-of-young-woman-relaxing-in-sunlight-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
    <div class="workk rounded-sm bg-red-300 h-fit sm:h-[49%] w-[32%] relative">
      <div
        class="workk-overlay absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] text-white h-full w-full grid place-items-center cursor-pointer"
      >
        <a
          href="#"
          class="text-white no-underline bg-gray-600 px-4 py-2 rounded-[20px] uppercase text-sm"
          >Open Project <i class="ri-arrow-right-up-line ml-1"></i
        ></a>
      </div>
      <img
        class="rounded-md h-full w-full aspect-auto object-cover"
        src="https://images.pexels.com/photos/28906236/pexels-photo-28906236/free-photo-of-rocky-shoreline-with-cliffs-and-trees-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
    <div class="workk rounded-sm bg-red-400 h-fit sm:h-[49%] w-[32%] relative">
      <div
        class="workk-overlay absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] text-white h-full w-full grid place-items-center cursor-pointer"
      >
        <a
          href="#"
          class="text-white no-underline bg-gray-600 px-4 py-2 rounded-[20px] uppercase text-sm"
          >Open Project <i class="ri-arrow-right-up-line ml-1"></i
        ></a>
      </div>
      <img
        class="rounded-md h-full w-full aspect-auto object-cover"
        src="https://images.pexels.com/photos/28704257/pexels-photo-28704257/free-photo-of-cozy-parisian-cafe-table-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
    <div
      class="layerr absolute top-0 left-0 w-full h-full flex justify-between pointer-events-none"
    >
      <div class="overlay-1 bg-white h-full w-[20%]"></div>
      <div class="overlay-1 bg-white h-full w-[20%]"></div>
      <div class="overlay-1 bg-white h-full w-[20%]"></div>
      <div class="overlay-1 bg-white h-full w-[20%]"></div>
      <div class="overlay-1 bg-white h-full w-[20%]"></div>
      <div class="overlay-1 bg-white h-full w-[20%]"></div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { onMounted } from "vue";
onMounted(() => {
  let work = gsap.utils.toArray(".overlay-1");
  let workk = gsap.utils.toArray(".workk");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "50% center",
      end: "bottom 10%",
      scrub: -10,
      pin: true,
    },
  });
  work.forEach((work, index) => {
    if (index % 2 == 0) {
      tl.to(work, {
        duration: 2,
        y: "100%",
        ease: "power1.inOut",
      });
    } else {
      tl.to(work, {
        duration: 2,
        y: "-100%",
        ease: "power1.inOut",
      });
    }
    // tl.from(workk[index], {
    //   duration: 1,
    //   opacity: 0,
    //   scale: 1.3,
    //   ease: "power1.inOut",
    // });
  });
});
</script>

<style scoped>
.wrapper {
  /* columns: 3 auto; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.workk {
  margin: 0.35rem;
}
.workk:hover .workk-overlay {
  opacity: 1;
}
.workk-overlay {
  transition: all 0.2s ease;
  opacity: 0;
}
.layerr {
  pointer-events: none;
}
</style>
