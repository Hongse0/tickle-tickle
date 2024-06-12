import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Investment from "../views/Investment.vue";
import ChallengeList from "../views/ChallengeList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invertment",
    name: "Investment",
    component: Investment,
  },

  {
    path: "/challenge/list",
    name: "ChallengeList",
    component: ChallengeList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
