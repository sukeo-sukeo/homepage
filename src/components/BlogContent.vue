<script setup>
import { onMounted, ref} from "vue";
import { useRoute, useRouter } from "vue-router";
import { BlogFinder } from "../lib/BlogFinder.js";

const route = useRoute();
const router = useRouter();

const bf = new BlogFinder();
const content = ref("")

const blogId = route.query.id;
if (blogId) {
  // 指定されたidがない場合の処理は未実装
  onMounted(async () => content.value = await bf.getBlog(blogId));
} else {
  // id指定ない場合は一覧画面へ戻す
  router.push("/")
}



</script>

<template>
  <div>
    <h2>コンテント.vue</h2>
    <p>{{ content }}</p>
  </div>
</template>

<style>

</style>