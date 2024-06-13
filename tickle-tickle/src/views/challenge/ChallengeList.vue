<template>
  <div class="card col-lg-11 container justify-content-center">
    <div class="row d-flex">
      <!-- 카드  -->

      <!-- Card header -->
      <div @click="deleteEditView" class="my-1 card-header col-8">
        <div class="text-center">
          <h2 class="mb-0">무지출 챌린지</h2>
        </div>

        <div class="card-body">
          <!-- 28개 컴포넌트 -->
          <div>
            <MonthChallenge> </MonthChallenge>
            <br />
            <!-- 입력창 -->
            <div
              class="card p-4"
              :editChallengeDay="editChallengeDay"
              style="margin-left: 80px; width: 80%"
            >
              <EditChallenge></EditChallenge>
            </div>
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

    <!-- 아래 -->
    <div>
      <AuthorsTable
        style="width: 80%; margin-left: 50px"
        :challengeList="challengeList"
      >
      </AuthorsTable>
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

// todo - axios, pinina

// 하단
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

// 옆에
const pastChallengeList = ref([
  {
    challengeId: 4,
    name: "챌린지4 ",
    date: "2024-06-14",
  },
  {
    challengeId: 3,
    name: "챌린지 3",
    date: "2024-06-13",
  },
  {
    challengeId: 2,
    name: "챌린지 2",
    date: "2024-06-12",
  },
  {
    challengeId: 1,
    name: "챌린지 1",
    date: "2024-06-11",
  },
]);

const editChallengeDay = ref({
  day: 1,
  status: true,
  memo: "날짜",
});
</script>
