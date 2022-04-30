<script setup>

const props = defineProps({
  blogData: Object
})

const blogData = props.blogData;

</script>

<template>

<v-card class="ma-3">
  <v-card-title>
    {{blogData.title}}
  </v-card-title>
  <v-card-text>
    {{blogData.created}}
  </v-card-text>
  <v-card-text>
    {{blogData.category}}
  </v-card-text>
  <v-card-text>
    {{blogData.tags}}
  </v-card-text>
  <v-card-text>
    {{blogData.summary}}
  </v-card-text>
</v-card>

</template>


<style>

</style>