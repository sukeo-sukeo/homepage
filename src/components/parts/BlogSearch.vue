<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { appOpt } from "../../config/app.js"

const emits = defineEmits([
  "search-word", "show-options"
]);

const router = useRouter();
const route = useRoute();
const optList = appOpt.searchOptions;

const keyword = ref("");
const options = ref(["body"]);

const showOptions = ref(false);

watch(route, async () => {
  const keyword = route.query.keyword;
  const options = route.query.options;
  emits("search-word", keyword, options);
});

</script>

<template>
  <div>
    <v-text-field
      v-model="keyword"
      @keypress.enter="router.push({path: '/search', query:{keyword, options}})"
      @focus="showOptions = true;
      emits('show-options', showOptions)"
      label="Search"
      class="mb-2"
    ></v-text-field>
    <div class="d-flex flex-wrap"
     v-if="showOptions">
      <v-checkbox
        v-model="options"
        :label="opt"
        :value="opt"
        v-for="opt in optList" :key="opt"
        style="height: 30px;"
      ></v-checkbox>
      <div class="text-h5" style="position: absolute; bottom: -5px; right: 0;" @click="showOptions = false; emits('show-options', showOptions)">
        <i class="bi bi-caret-up"></i>
      </div>
    </div>
  </div>
</template>


<style scoped>
.v-text-field:deep(.v-input__details) {
  display: none;
}
</style>