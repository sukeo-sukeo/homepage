<script setup>
import { appOpt } from "../../config/app.js";
import BlogTag from "./BlogTag.vue";

const props = defineProps({
  blogData: Object
})

const blogData = props.blogData;
const url = appOpt.imgUrl;

</script>

<template>

<v-card class="ma-3 d-flex">
  <div>
    <v-img :src="blogData.thumnail" :alt="blogData.thumnail_seo" width="200"></v-img>
    <v-card class="text-caption px-1 ma-1" style="position: absolute; top: 0; opacity: .9;">{{ blogData.category }}</v-card>
  </div>
  <div>
    <router-link :to="{path: '/content', query: {id: blogData.id}}">
      <v-card-title>
        {{blogData.title}}
      </v-card-title>
      <v-card-text>
        {{blogData.summary}}
      </v-card-text>
    </router-link>
    <BlogTag
     :tags="blogData.tags.split(',')" />
    <div class="d-flex">
      <v-card-text>
        {{blogData.created}}
      </v-card-text>
    </div>
  </div>
</v-card>

</template>


<style>

</style>