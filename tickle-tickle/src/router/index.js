import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Investment from "../views/investment/Investment.vue";
import ChallengeList from "../views/challenge/ChallengeList.vue";
import ChallengeCreate from "../views/challenge/ChallengeCreate.vue";
import Userstats from "../views/stats/dashboards/Userstats.vue";
<<<<<<< HEAD
import NewTransaction from "../views/Transaction/NewTransaction.vue";
import Starstats from "../views/stats/dashboards/Starstats.vue";
=======
import NewTransaction from "../views/transaction/NewTransaction.vue";
>>>>>>> 0e4e4b9d30971a1d4cbc54f0dc6770c1445af310
// import lockIllustration from "../views/auth/lock/Illustration.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/investment",
    name: "Investment",
    component: Investment,
  },

  {
    path: "/challenge/list",
    name: "ChallengeList",
    component: ChallengeList,
  },
  {
    path: "/challenge/Create",
    name: "ChallengeCreate",
    component: ChallengeCreate,
  },
  {
    path: "/stats/users",
    name: "Stats",
    component: Userstats,
  },
  {
    path: "/transaction/NewTransaction",
    name: "NewTransaction",
    component: NewTransaction
  },
<<<<<<< HEAD
  {
    path: "/stats/stars",
    name: "stars",
    component: Starstats
  },
=======

>>>>>>> 0e4e4b9d30971a1d4cbc54f0dc6770c1445af310
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
