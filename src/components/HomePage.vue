<template>
  <div class="px-2 py-2 sm:px-8 sm:py-4">
    <Navbar />
    <Home />
    <Skills />
    <Work />
    <ProjectContainer v-if="false" />
    <Footer />
  </div>
</template>

<script setup>
import Lenis from "lenis";
import Work from "@/components/Work.vue";
import Home from "@/components/Home.vue";
import Navbar from "@/components/Navbar.vue";
import Skills from "@/components/Skills.vue";
import Footer from "@/components/Footer.vue";
import ProjectContainer from "@/components/ProjectContainer.vue";
</script>

<style lang="scss" scoped></style>
