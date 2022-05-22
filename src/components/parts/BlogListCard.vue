<script setup>
import { appOpt } from "../../config/app.js";
import { Utill } from "../../lib/util.js";
const util = new Utill();

import BlogTag from "./BlogTag.vue";

const props = defineProps({
  blogData: Object
})

const blogData = props.blogData;
const url = appOpt.imgUrl;

</script>

<template>

<v-card class="ma-3">
  <router-link :to="{path: '/content', query: {id: blogData.id}}">
    <v-card-title>
      {{blogData.title}}
    </v-card-title>
  </router-link>
  <div class="d-flex" style="position: relative;">
    <div class="align-self-center" >
      <v-img :src="blogData.thumnail" :alt="blogData.thumnail_seo" width="150"></v-img>
      <v-card class="text-caption px-1 ma-1" style="position: absolute; top: 0; opacity: .9;">{{ blogData.category }}</v-card>
    </div>
    <div class="ms-1">
      <BlogTag
      :tags="blogData.tags ? blogData.tags.split(',') : ['notice']" />
      <div class="d-flex">
        <v-card-text class="pa-0 py-1 ps-2">
          <i class="bi bi-pencil"></i>
          {{blogData.created}}
        </v-card-text>
      </div>
      <router-link :to="{path: '/content', query: {id: blogData.id}}">
        <div class="text-caption" style="overflow-wrap: anywhere;">
          {{ util.cutChara(blogData.summary, appOpt.summaryCharMax) }}
        </div>
      </router-link>
    </div>
  </div>
</v-card>

</template>


<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>