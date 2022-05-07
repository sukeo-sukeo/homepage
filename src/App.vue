<script setup>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import { ref } from "vue";

const keyword = ref("");
const options = ref("");
const listeners = (...args) => {
  keyword.value = args[0];
  options.value = args[1];
}

</script>

<template>
  <v-app>
    <v-main style="border: solid 15px black;">
      <Header @search-word="listeners"/>
      <router-view 
      :keyword="keyword" :options="options">
      </router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap');

#app {
  font-family: 'Kosugi Maru', sans-serif;
}
</style>