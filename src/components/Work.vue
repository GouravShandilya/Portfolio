<template>
  <div class="sm:py-16 sm:px-8">
    <h2 class="text-3xl py-3 px-4 header">
      Take a Look at <br />
      <span>My Projects</span>
    </h2>
    <div class="w-full h-fit py-5 px-3 sm:flex justify-between gap-4 sm:gap-2">
      <div class="img-wrap h-fit sm:h-[430px]" v-for="i in list" :key="i.link">
        <img
          :src="i.img"
          alt=""
          class="h-[300px] sm:h-full w-full object-cover block rounded-[20px]"
        />
        <button href="text-sm">{{ i.tittle }} <i class="ri-arrow-right-line"></i></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
</script>

<style lang="scss" scoped>
.img-wrap {
  width: calc(100% / 3);
  transition: all 0.6s ease-in-out;
  button {
    margin-top: 2rem;
    margin-left: 0.3rem;
    i {
      transition: all 0.6s ease-in-out;
      visibility: hidden;
    }
  }
  &:hover {
    width: 50%;
    cursor: pointer;
    button {
      color: var(--color-fg-bold);
      i {
        visibility: visible;
      }
    }
  }
  @media screen and (max-width: 640px) {
    margin-top: 0.4rem;
    width: 100%;
    button {
      margin-top: 0.5rem;
    }
    &:hover {
      width: 100%;
    }
  }
}
</style>
