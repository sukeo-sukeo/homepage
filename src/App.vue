<script setup>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";

</script>

<template>
  <v-app>
    <v-main style="border: solid 15px black;">
      <Header />
      <router-view>
      </router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>