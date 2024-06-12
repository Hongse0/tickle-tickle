<template>
  <div class="card col-lg-11 container justify-content-center">
    <div class="row d-flex">
      <!-- 카드  -->

      <!-- Card header -->
      <div class="my-1 card-header col-8">
        <div class="text-center"><h2 class="mb-0">무지출 챌린지</h2></div>

        <div class="card-body border border-dark">
          <h1>body</h1>

          <br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />

          <div class="card p-4">
            <EditChallenge></EditChallenge>
          </div>
        </div>
      </div>

      <!-- 사이드바 -->
      <div class="col-4">
        <PastChallengeSideBar
          :pastChallengeList="pastChallengeList"
        ></PastChallengeSideBar>
      </div>
    </div>

    <!-- body -->

    <hr class="border border-dark" />

    <br /><br /><br />
    <div>
      <h1>Section2</h1>
      <AuthorsTable :challengeList="challengeList"> </AuthorsTable>
      <br />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import AuthorsTable from "./components/MothChallenge.vue";
import PastChallengeSideBar from "./components/PastChallengeSideBar.vue";
import EditChallenge from "./components/EditChallenge.vue";
// todo - axios, pinina
const challengeList = ref([
  {
    id: 1,
    name: "챌린지 1",
    memo: "개휘1",
    status: true,

    date: "2024-06-12",
  },
  {
    id: 2,
    name: "챌린지 2",
    memo: "개휘",
    status: false,
    date: "2024-06-11",
  },
]);

const pastChallengeList = ref([
  {
    id: 4,
    name: "챌린지4 ",
    date: "2024-06-14",
  },
  {
    id: 3,
    name: "챌린지 3",
    date: "2024-06-13",
  },
  {
    id: 2,
    name: "챌린지 2",
    date: "2024-06-12",
  },
  {
    id: 1,
    name: "챌린지 1",
    date: "2024-06-11",
  },
]);
</script>
