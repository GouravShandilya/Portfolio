<template>
  <div class="sm:py-4 sm:px-8 project-wrapper mb-5">
    <div
      class="px-4 py-2 sm:h-[330px] w-full flex-col sm:flex-row flex items-center justify-around mt-10 relative project1"
      v-for="item in list"
      :key="item.link"
    >
      <div class="content h-full flex flex-col justify-between py-8 px-4 w-full sm:w-[40%]">
        <h4 class="text-3xl header">{{ item.tittle }}</h4>
        <div class="option flex flex-col gap-8">
          <p class="text-balance opacity-90 text-sm">{{ item.desc }}</p>
          <a :href="item.link" class="text-md btn w-fit"
            >View Project <i class="ri-arrow-right-line ml-1"></i
          ></a>
        </div>
      </div>
      <div class="img-wrapper h-[250px] sm:h-[330px] w-full sm:w-[30%] overflow-hidden">
        <img :src="item.img" alt="" class="block object-cover h-full w-full rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ref } from 'vue'
import { onMounted } from 'vue'

const list = ref([
  {
    tittle: 'WebFlow Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia  lorem ipsum dolor sit amet consectetur adipisicing elit . Quisquam, quia. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
    img: 'https://www.danielvaszka.com/Images/Bang-Mobile-Long.jpg',
    link: '/webflow',
  },
  {
    tittle: 'Web Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia  lorem ipsum dolor sit amet consectetur adipisicing elit . Quisquam, quia. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
    img: 'https://www.danielvaszka.com/Images/Roczen-Desktop-Image-Long.jpg',
    link: '/webDesign',
  },
  {
    tittle: 'Figma to Webflow',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia  lorem ipsum dolor sit amet consectetur adipisicing elit . Quisquam, quia. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.',
    img: 'https://www.danielvaszka.com/Images/SGW-Desktop-Image-Long.jpg',
    link: '/figma',
  },
])

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.project-wrapper',
      start: '0% 50%',
      end: '80% 50%',
      scrub: true,
    },
  })

  let card = gsap.utils.toArray('.project1')
  let imgWrappers = gsap.utils.toArray('.img-wrapper')

  card.forEach((card, index) => {
    tl.from(card, {
      duration: 3,
      y: '70%',
      opacity: 0,
      transition: 'all ease-in',
    })
    tl.from(imgWrappers[index], {
      duration: 3,
      scale: 0,
      opacity: 0,
      transition: 'all ease-in',
    })
  })
})
</script>
<style lang="scss" scoped>
.btn {
  position: relative;
  cursor: pointer;
}
.btn::before {
  content: '';
  width: 0%;
  height: 1px;
  background-color: var(--color-fg-bold);
  position: absolute;
  bottom: -8%;
  left: 2%;
  transition: all 0.4s ease;
}
.btn:hover::before {
  cursor: pointer;
  width: 92%;
}
#svgPlane {
  position: absolute;
}
</style>
