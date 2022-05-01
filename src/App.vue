<script setup>
import Header from "./components/shared/Header.vue";

</script>

<template>
  <v-app>
    <v-main style="border: solid 15px black;">
      <Header />
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>