<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { BlogFinder } from "../lib/BlogFinder.js";

import BlogListCard from "./parts/BlogListCard.vue";
import Pagination from "./parts/Pagination.vue";

const route = useRoute();

const bf = new BlogFinder();
const blogDataList = ref("");
const maxPage = ref("");

onMounted(async () => {
  const page = route.query.page;
  [blogDataList.value, maxPage.value] = await bf.getFullData(page);
});

watch(route, async () => {
  const page = route.query.page;
  [blogDataList.value, maxPage.value] = await bf.getFullData(page);
});

</script>


<template>
  <v-col class="pa-0 mx-auto" md="8">
    <ul>
      <li v-for="blogData in blogDataList" :key="blogData">
        <BlogListCard
          :blogData=blogData />
      </li>
    </ul>
    <Pagination
      :maxPage=maxPage />
  </v-col>
</template>

<style scoped>
li {
  list-style: none;
}
</style>