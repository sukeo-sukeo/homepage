<script setup>
</script>

<template>
    <v-toolbar
      elevation="4"
      class="bg-black ps-0 d-flex"
      height="100"
    >
      <v-toolbar-title class="align-self-start" style="position: fixed; z-index: 100;">
        <router-link to="/">
          Sukeo
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
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