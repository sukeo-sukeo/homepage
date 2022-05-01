<script setup>

const props = defineProps({
  tags: Array
});

</script>

<template>
  <div>
    <v-chip class="ma-1" size="x-small" v-for="tag in props.tags" :key="tag">
      {{tag}}
    </v-chip>
  </div>
</template>

<style>

</style>