import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Investment from "../views/investment/Investment.vue";
import ChallengeList from "../views/challenge/ChallengeList.vue";
import Userstats from "../views/stats/dashboards/Userstats.vue";
// import lockIllustration from "../views/auth/lock/Illustration.vue";

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
  {
    path: "/stats/users",
    name: "Stats",
    component: Userstats,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
