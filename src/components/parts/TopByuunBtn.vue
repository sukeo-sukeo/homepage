<script setup>
import { onMounted, ref, watch } from "vue";

const scroll = ref(0);
const pointH = document.body.getBoundingClientRect().height;
const isShow = ref(false);

window.addEventListener('scroll', () => scroll.value = window.scrollY);

const byuun = () => 
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

watch(scroll, () => {
  scroll.value > pointH ? isShow.value = true : isShow.value = false
});

</script>

<template>
  <div class="v-btn-wrapper">
    <v-btn
    icon
    elevation="5"
    @click="byuun"
    v-show="isShow">
      <v-icon dark>
        mdi-arrow-up-thick
      </v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.v-btn-wrapper {
  text-align: right;
  position: sticky;
  bottom: 5%;
}
</style>