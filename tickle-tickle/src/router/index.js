import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
// import lockIllustration from "../views/auth/lock/Illustration.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
