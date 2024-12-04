<template>
  <div id="footer">
    <div class="relative w-full h-screen">
      <div class="flex flex-col gap-10 sm:gap-4 ml-2 sm:ml-[10vw] h-full">
        <p class="font uppercase">Lets <br /><span class="ml-16"> connect</span></p>
        <div
          class="flex gap-[5rem] sm:gap-8 w-full flex-col-reverse items-start flex-1 justify-between"
        >
          <div class="flex gap-2 sm:gap-8 items-end w-full justify-end flex-wrap">
            <span class="sm:text-4xl text-md btn font-light sm:mt-8 border-b sm:py-4"
              >X (Twitter) <i class="ri-arrow-right-up-line"></i
            ></span>
            <span class="sm:text-4xl text-md btn font-light sm:mt-8 border-b sm:py-4"
              >Instagram<i class="ri-arrow-right-up-line"></i>
            </span>
            <span class="sm:text-4xl text-md btn font-light sm:mt-8 border-b-2 sm:py-4"
              >Linkedin<i class="ri-arrow-right-up-line"></i
            ></span>
          </div>
          <div class="connect w-full sm:w-[50%] mt-28">
            <ul class="flex gap-3 font-mono capitalize text-gray-400">
              <li :class="{ active: index == current }" v-for="(l, index) in list" :key="index">
                {{ l }}
              </li>
            </ul>
            <div class="w-full">
              <div class="w-full flex items-end">
                <input
                  type="text"
                  placeholder="Enter Name"
                  class="mt-8 border-b py-4 outline-none bg-transparent w-full"
                  v-model="name"
                  v-if="current == 0"
                  @keyup.enter="current < 2 ? current++ : (current = 0)"
                  autofocus="true"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  class="mt-8 border-b py-4 outline-none bg-transparent w-full"
                  v-model="email"
                  @keyup.enter="current < 2 ? current++ : (current = 0)"
                  v-if="current == 1"
                  autofocus="true"
                />
                <input
                  type="text"
                  placeholder="Enter Msg"
                  class="mt-8 border-b py-4 outline-none bg-transparent w-full"
                  v-model="msg"
                  v-if="current == 2"
                  @keyup.enter="current < 2 ? current++ : (current = 0)"
                  autofocus="true"
                />
                <i
                  class="ri-arrow-right-line ri-2x"
                  @click="current < 2 ? current++ : (current = 0)"
                ></i>
              </div>
              <button
                v-if="current > 0"
                @click="current > 0 ? current-- : ''"
                class="font-mono bg-transparent border-none outline-none mt-4 cursor-pointer text-gray-600 btn"
              >
                <i class="ri-arrow-left-line ri-md"></i> back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const list = ref(['name', 'email', 'message'])
const current = ref(0)
const name = ref(null)
const email = ref(null)
const msg = ref(null)

// document.addEventListener("keydown", (e) => {
//   if (e.key == "Enter") {
//     current.value < 2 ? current.value++ : (current.value = 0);
//   }
// });
</script>

<style scoped>
.font {
  font-size: clamp(2rem, 10.4vw - 1rem, 10.4vw - 2rem);
  line-height: clamp(2rem, 10.4vw - 1rem, 10.4vw - 2rem);
  margin-top: 4rem;
  font-weight: 400;
  /* color: rgba(0, 0, 0, 0.8); */
  position: relative;
  z-index: 1;
}
.active {
  color: var(--color-fg-bold);
  border-bottom: 1px solid var(--color-fg-bold);
}
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
  bottom: -5%;
  left: 4%;
  transition: all 0.3s ease;
}
.btn:hover::before {
  cursor: pointer;
  width: 92%;
}
</style>
