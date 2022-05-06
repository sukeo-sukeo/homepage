<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { BlogFinder } from "../lib/BlogFinder.js";

import BlogListCard from "./parts/BlogListCard.vue"; 

const route = useRoute();

const bf = new BlogFinder();

const blogDataList = ref("");
const hit = ref(0);

const doSearch = async () => {
  const keyword = route.query.keyword;
  const options = route.query.options;
  if (!keyword || !options.length) {
    [blogDataList.value, hit.value] = [[], 0];
    return;
  } 
  [blogDataList.value, hit.value] = await bf.searchBlog(keyword, options);
}
onMounted(() => doSearch());

watch(route, () => doSearch());

</script>


<template>
  <v-col class="pa-0 mx-auto" md="8">
    {{ hit ? hit + "件ヒットしました" : "見つかりませんでした..." }}
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