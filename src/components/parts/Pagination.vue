<script setup>
const props = defineProps({
  maxPage: [Number, String]
});

</script>

<template>
<div class="d-flex justify-center mb-3">
  <v-btn v-for="page in maxPage" :key="page" size="small">
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