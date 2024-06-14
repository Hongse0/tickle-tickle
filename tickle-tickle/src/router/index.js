import { createRouter, createWebHistory } from "vue-router";
import Investment from "../views/investment/Investment.vue";
import ChallengeList from "../views/challenge/ChallengeList.vue";
import ChallengeCreate from "../views/challenge/ChallengeCreate.vue";
import Userstats from "../views/stats/dashboards/Userstats.vue";
import TransactionList from "../views/transaction/TransactionList.vue";
import NewTransaction from "../views/transaction/NewTransaction.vue";
import Starstats from "../views/stats/dashboards/Starstats.vue";
import TransactionDetail from "../views/transaction/TransactionDetail.vue";
import SignIn from "../views/login/SignIn.vue";
import Main from "../views/main/Main.vue";
<<<<<<< HEAD
import Mypage from "../views/mypage/Mypage.vue";
=======
import SignUp from "../views/login/SignUp.vue";
>>>>>>> c08d4efe63f78be1e820063757eeb23dc677690c

const routes = [
  {
    path: "/",
    name: "Main",
    component: SignIn,
  },
  {
    path: "/main",
    // name: "Main2",
    component: Main,
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
    component: NewTransaction,
  },
  {
    path: "/transaction/TransactionList",
    name: "TransactionList",
    component: TransactionList,
  },
  {
    path: "/transaction/TransactionDetail",
    name: "TransactionDetail",
    component: TransactionDetail,
  },
  {
    path: "/stats/stars",
    name: "stars",
    component: Starstats,
  },
  {
    path: "/login/signIn",
    name: "signIn",
    component: SignIn,
  },
  {
    path: "/transaction/TransactionDetail/:date", // 날짜 파라미터 추가
    name: "TransactionDetail",
    component: TransactionDetail,
    props: true,
  },
  {
<<<<<<< HEAD
    path: "/myPage", // 날짜 파라미터 추가
    name: "myPage",
    component: Mypage,
    props: true,
  },
=======
    path: "/signup",
    name: "signup",
    component: SignUp,
  }
>>>>>>> c08d4efe63f78be1e820063757eeb23dc677690c
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
