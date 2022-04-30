import { createRouter, createWebHistory } from "vue-router";

import BlogList from "./components/BlogList.vue";

const routes = [
  {
    path: "/",
    name: "BlogList",
    component: BlogList
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };