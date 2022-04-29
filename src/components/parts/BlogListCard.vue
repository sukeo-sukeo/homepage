<script setup>

const props = defineProps({
  blogData: Object
})

const blogData = props.blogData;

</script>

<template>

<p>{{ blogData.id }}</p>

</template>


<style>

</style>