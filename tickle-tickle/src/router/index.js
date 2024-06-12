import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Investment from "../views/Investment.vue";
import Userstats from "../views/stats/dashboards/Userstats.vue";
// import lockIllustration from "../views/auth/lock/Illustration.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/invertment",
    name: "Investment",
    component: Investment
  },
  {
    path: "/stats/users",
    name: "Stats",
    component: Userstats
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;