<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { BlogFinder } from "../lib/BlogFinder.js";

import BlogListCard from "./parts/BlogListCard.vue";

const route = useRoute();

const bf = new BlogFinder();

const blogDataList = ref("");

const doSearch = async () => {
  const keyword = route.query.keyword;
  const options = route.query.options;
  if (!keyword) return;
  blogDataList.value = await bf.searchBlog(keyword, options);
}
onMounted(() => doSearch());

watch(route, () => doSearch());

</script>


<template>
  <v-col class="pa-0 mx-auto" md="8">
    <ul>
      <li v-for="blogData in blogDataList" :key="blogData">
        <BlogListCard
          :blogData=blogData />
      </li>
    </ul>
  </v-col>
</template>

<style scoped>
li {
  list-style: none;
}
</style>