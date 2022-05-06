<script setup>
import { ref } from "vue";
import BlogSearch from "../parts/BlogSearch.vue";

const emits = defineEmits([
  "search-word"
]);

const listeners = (keyword, options) => emits("search-word", keyword, options);

const headerHeight = ref(100);
const changeHeight = (showOptions) => showOptions ? headerHeight.value = 220 : headerHeight.value = 100;

</script>

<template>
    <v-toolbar
      elevation="4"
      class="bg-black ps-0 pb-3 d-flex"
      :height="headerHeight"
    >
    <div class="d-flex flex-column justify-space-between w-75" style="height: inherit; max-width: 250px;">
      <div class="mt-2">
        <v-toolbar-title class="align-self-start" style="position: fixed; z-index: 100;">
          <router-link to="/">
            Sukeo
          </router-link>
        </v-toolbar-title>
      </div>
      <div>
        <BlogSearch @search-word="listeners"
        @show-options="changeHeight" />
      </div>
    </div>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-title class="align-self-start text-end">
        <div class="d-flex flex-column" style="position: fixed; right: 20px; z-index: 100;">
          <router-link to="contact">
            <span>Contact</span>
          </router-link>
          <router-link to="about">
            <span>About</span>
          </router-link>
          <router-link to="/">
            <span>Blog</span>
          </router-link>
        </div>
      </v-toolbar-title>
    </v-toolbar>
</template>


<style scoped>
a {
  text-decoration: none;
  color: white;
}
.v-toolbar:deep(.v-toolbar__content) {
  padding-top: 0;
}
</style>