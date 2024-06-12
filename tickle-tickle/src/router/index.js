import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Investment from "../views/investment/Investment.vue";
import ChallengeList from "../views/challenge/ChallengeList.vue";
import Userstats from "../views/stats/dashboards/Userstats.vue";
import NewTransaction from "../views/Transaction/NewTransaction.vue";
import Starstats from "../views/stats/dashboards/Starstats.vue";
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
  {
    path: "/Transaction/NewTransaction",
    name: "NewTransaction",
    component: NewTransaction
  },
  {
    path: "/stats/stars",
    name: "stars",
    component: Starstats
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
