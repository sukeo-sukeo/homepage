<script setup>
import avatar from '../../assets/image/avatar.jpg';

</script>

<template>
  <v-toolbar
    elevation="4"
    class="bg-black d-flex"
    height="300"
  >

    <div class="d-flex flex-column align-center w-100">
      
      <a href="https://github.com/sukeo-sukeo" target="_blank">
        <v-avatar size="150">
          <v-img :src="avatar"></v-img>
        </v-avatar>
      </a>

      <span class="mt-3 text-h6 text-center">
        I enjoy my family, wine, beer, and programming.
      </span>
    </div>

  </v-toolbar>
</template>


<style scoped>
/* .v-toolbar:deep(.v-toolbar__content) {
  padding-top: 0;
} */
.v-toolbar {
  height: 60vh;
}
</style>