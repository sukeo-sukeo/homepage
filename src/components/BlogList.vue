<script setup>
import { onMounted, ref } from "vue";
import { BlogFinder } from "../lib/BlogFinder.js";

import BlogListCard from "./parts/BlogListCard.vue";
import Pagination from "./parts/Pagination.vue";


const bf = new BlogFinder();
const blogDataList = ref("");
const maxPage = ref("");

onMounted(async() => [blogDataList.value, maxPage.value] = await bf.getFullData());

const pnClick = async (page) => [blogDataList.value, maxPage.value] = await bf.getFullData(page);

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
      <Pagination
       :maxPage=maxPage
       @pn-click=pnClick />
    </v-main>
  </v-app>
</template>