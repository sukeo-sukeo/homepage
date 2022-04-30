<script setup>
const props = defineProps({
  maxPage: [Number, String]
});

</script>

<template>
<div class="d-flex">
  <v-btn v-for="page in maxPage" :key="page">
    <router-link :to="{path: '/', query: {page}}">
      {{page}}
    </router-link>
  </v-btn>
</div>

</template>

<style>

</style>