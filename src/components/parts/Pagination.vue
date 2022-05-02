<script setup>
import { appOpt } from "../../config/app.js";



const props = defineProps({
  maxPage: [Number, String]
});

</script>

<template>
  <div class="d-flex justify-center mb-3">
    <v-btn size="small" v-for="page in maxPage" :key="page">
      <router-link :to="{path: '/', query: {page}}">
        {{page}}
      </router-link>
    </v-btn>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>