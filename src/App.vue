<script setup>
</script>

<template>
  <div class="h-screen relative bg-main dark:bg-main-dark">
    <Navbar class="sticky top-0 left-0"/>
    <div class="flex-1 flex items-center justify-center px-5 py-15 bg-main dark:bg-main-dark overflow-y-auto">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
