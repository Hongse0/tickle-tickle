<template>
  <div class="card col-lg-11 container justify-content-center">
    <div class="row d-flex">
      <!-- 카드  -->

      <!-- Card header -->
      <div class="my-1 card-header col-8">
        <div class="text-center">
          <h2 class="mb-0">무지출 챌린지</h2>
        </div>

        <div class="card-body">
          <!-- 28개 컴포넌트 -->
          <div>
            <MonthChallenge @click="toggleComponent"> </MonthChallenge>
          </div>

          <br />
          <!-- 입력 뷰 -->
          <div
            v-if="showComponent"
            class="card p-4"
            style="margin-left: 80px; width: 80%"
          >
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

    <div>
      <br v-if="!showComponent" />
      <AuthorsTable :challengeList="challengeList"> </AuthorsTable>
      <br />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AuthorsTable from "./components/MonthChallengeItem.vue";
import PastChallengeSideBar from "./components/PastChallengeSideBar.vue";
import EditChallenge from "./components/EditChallenge.vue";
import MonthChallenge from "./components/MonthChallenge.vue";

const showComponent = ref(false);
const toggleComponent = () => {
  showComponent.value = !showComponent.value;
};
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
