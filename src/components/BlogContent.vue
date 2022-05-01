<script setup>
import { onMounted, ref} from "vue";
import { useRoute, useRouter } from "vue-router";
import { BlogFinder } from "../lib/BlogFinder.js";

import Prism from "prismjs";
import "prismjs/themes/prism.css";
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-liquid'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-scss'

const route = useRoute();
const router = useRouter();

const bf = new BlogFinder();
const content = ref("")

const blogId = route.query.id;
if (blogId) {
  // 指定されたidがない場合の処理は未実装
  onMounted(async () => {
    content.value = await bf.getBlog(blogId);
    setTimeout(() => Prism.highlightAll(), 1)
  })
} else {
  // id指定ない場合は一覧画面へ戻す
  router.push("/")
}



</script>

<template>
  <v-container>
    <h1>{{ content.title }}</h1>
    <v-divider></v-divider>
    <div class="d-flex justify-end align-baseline">
      <span class="me-2">
        <i class="bi bi-pencil"></i>
        {{ content.created }}
      </span>
      <span class="text-caption">
        <i class="bi bi-arrow-counterclockwise"></i>
        {{ content.updated }}
      </span>
    </div>
    <v-img :src="content.thumnail" :alt="content.thumnail_seo"></v-img>
    <div class="preview" v-html="content.body">
    </div>
  </v-container>
</template>

<style scoped>
.preview:deep(pre) {
  /* padding-top: 15px; */
  border-radius: 3px;
  /* background: gainsboro; */
}
/* .preview:deep(code) { */
  /* color: black; */
  /* background: gainsboro; */
  /* padding: 0 5px; */
/* } */

.preview:deep(blockquote) {
    padding-left: 1em;
    margin: 0;
    color: .666666db;
    border-left: 0.5em lightblue solid;
  }

.preview:deep(p) {
    margin: 1em 0;
  }

.preview:deep(img) {
    max-width: 100%;
  }

/* .preview:deep(p) > img {
    max-width: 60%;
  } */

.preview:deep(h1), h2, h3, h4, h5, h6 {
    font-weight: normal;
    line-height: 1em;
  }
.preview:deep(h4), h5, h6 {
    font-weight: bold;
  }
.preview:deep(h1) {
    font-size: 2.5em;
  }
.preview:deep(h2) {
    font-size: 2em;
  }
.preview:deep(h3) {
    font-size: 1.5em;
  }
.preview:deep(h4) {
    font-size: 1.2em;
  }
.preview:deep(h5) {
    font-size: 1em;
  }
.preview:deep(h6) {
    font-size: 0.9em;
  }

.preview:deep(ol) {
    margin: 1em 0;
    padding: 0 0 0 2em;
  }

.preview:deep(ul) {
    margin: 1em 0;
    padding: 0 0 0 2em;
    list-style: disc;
  }

.preview:deep(dd) {
    margin: 0 0 0 2em;
  }

.preview:deep(table) {
    margin: 10px 0 15px 0;
    border-collapse: collapse;
  }
.preview:deep(td), .preview:deep(th) {
    border: 2px solid #ccb8a3;
    padding: 3px 10px;
  }
.preview:deep(th) {
    padding: 5px 10px;
    background: #ccb8a3a3;
  }
</style>