import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
<<<<<<< HEAD
import Investment from "../views/Investment.vue";
import Userstats from "../views/stats/dashboards/Userstats.vue";
=======
import Investment from "../views/investment/Investment.vue";
>>>>>>> 028f388689bcc553ce063564a071d840567c955a
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