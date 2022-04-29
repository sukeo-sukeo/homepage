<script setup>
const props = defineProps({
  maxPage: [Number, String]
});

const emits = defineEmits([
  "pn-click"
])

</script>

<template>
<div class="d-flex">
  <v-btn v-for="page in maxPage" :key="page" @click="emits('pn-click', page)">
    <span>{{ page }}</span>
  </v-btn>
</div>

</template>

<style>

</style>