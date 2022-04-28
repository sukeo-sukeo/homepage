<script setup>
import { onMounted, ref } from "vue";
import { BlogFinder } from "../lib/BlogFinder.js";

import BlogListCard from "./shared/BlogListCard.vue";

const bf = new BlogFinder();
const blogDataList = ref("");

onMounted(async() => blogDataList.value = await bf.getFullData());

</script>


<template>
  <v-app>
    <v-main>
      <h1>my blog site</h1>
      <ul>
        <li v-for="blogData in blogDataList" :key="blogData">
          <BlogListCard
           :blogData=blogData />
        </li>
      </ul>
    </v-main>
  </v-app>
</template>