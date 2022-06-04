import { createRouter, createWebHistory } from "vue-router";
import { appOpt } from "./config/app.js"; 

import BlogList from "./components/BlogList.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";

const routes = [
  {
    path: "/",
    name: "BlogList",
    component: BlogList,
  },
  {
    path: "/content",
    name: "BlogContent",
    component: () => import("./components/BlogContent.vue"),
  },
  {
    path: "/search",
    name: "SearchResult",
    component: () => import("./components/SearchResult.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export { router };