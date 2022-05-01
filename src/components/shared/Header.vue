<script setup>

</script>

<template>
  <div>
    <v-toolbar
      elevation="4"
      class="bg-black ps-0 d-flex"
      height="100"
    >
      <v-toolbar-title class="align-self-start" style="position: fixed; z-index: 100;">Sukeo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="align-self-start text-end">
        <div class="d-flex flex-column" style="position: fixed; right: 20px; z-index: 100;">
          <span>Contact</span>
          <span>About</span>
          <span>Blog</span>
        </div>
      </v-toolbar-title>


    </v-toolbar>
  </div>  
</template>


<style scoped>
.v-toolbar:deep(.v-toolbar__content) {
  padding-top: 0;
}
</style>