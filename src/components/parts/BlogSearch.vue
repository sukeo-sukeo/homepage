<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const emits = defineEmits([
  "search-word"
]);
const router = useRouter();
const route = useRoute();

const keyword = ref("");
const options = ref(["tag", "category", "summary"]);

watch(route, async () => {
  const keyword = route.query.keyword;
  const options = route.query.options;
  emits("search-word", keyword, options);
});

</script>

<template>
  <v-text-field
    v-model="keyword"
    @keypress.enter="router.push({path: '/search', query:{keyword, options}})"
    label="Search"
    class="mb-2"
  ></v-text-field>
  <!-- <v-text-field
    v-model="keyword"
    @keypress.enter="emits('search-word', keyword, options)"
    label="Search"
    class="mb-2"
  ></v-text-field> -->
</template>


<style scoped>
.v-text-field:deep(.v-input__details) {
  display: none;
}
</style>