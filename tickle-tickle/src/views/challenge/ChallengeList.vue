<template>
  <div class="container">
    <br />
    <!-- TODO -->
    <!-- <div class="row col-lg-12">
      <div class="col-lg-3 col-md-6 col-12">
        <mini-statistics-card
          title="Today's Money"
          value="$53,000"
          description="<span
                class='text-sm font-weight-bolder text-success'
                >+55%</span> {{ title }}"
          :icon="{
            component: 'ni ni-money-coins',
            background: 'bg-gradient-primary',
            shape: 'rounded-circle',
          }"
        />
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <mini-statistics-card
          title="Today's Users"
          value="2,300"
          description="<span
                class='text-sm font-weight-bolder text-success'
                >+3%</span> since last week"
          :icon="{
            component: 'ni ni-world',
            background: 'bg-gradient-danger',
            shape: 'rounded-circle',
          }"
        />
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <mini-statistics-card
          title="New Clients"
          value="+3,462"
          description="<span
                class='text-sm font-weight-bolder text-danger'
                >-2%</span> since last quarter"
          :icon="{
            component: 'ni ni-paper-diploma',
            background: 'bg-gradient-success',
            shape: 'rounded-circle',
          }"
        />
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <mini-statistics-card
          title="Sales"
          value="$103,430"
          description="<span
                class='text-sm font-weight-bolder text-success'
                >+5%</span> than last month"
          :icon="{
            component: 'ni ni-cart',
            background: 'bg-gradient-warning',
            shape: 'rounded-circle',
          }"
        />
      </div>
    </div> -->

    <!-- card -->
    <div class="card col-lg-11 container justify-content-center">
      <div class="row d-flex">
        <!-- 카드  -->

        <!-- Card header -->
        <div class="my-1 card-header col-8">
          <div class="text-center">
            <h2 class="mb-0">{{ currentChallenge.challengeName }}</h2>
          </div>

          <div class="card-body">
            <!-- 28개 컴포넌트 -->
            <div>
              <MonthChallenge> </MonthChallenge>
              <br />
              <!-- 입력창 -->
              <div class="card p-4" style="margin-left: 80px; width: 80%">
                <EditChallenge
                  :editChallengeDay="editChallengeDay"
                ></EditChallenge>
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
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

import AuthorsTable from "./components/MonthChallengeItem.vue";
import PastChallengeSideBar from "./components/PastChallengeSideBar.vue";
import EditChallenge from "./components/EditChallenge.vue";
import MonthChallenge from "./components/MonthChallenge.vue";

import axios from "axios";

const challengeList = ref([]);
const pastChallengeList = ref([]);
const currentChallenge = ref({});

const getPastChallengeList = async () => {
  try {
    const response = await axios.get("http://localhost:3000/challenge");
    const jsonData = response.data;
    pastChallengeList.value = jsonData;
    currentChallenge.value = pastChallengeList.value[0];
  } catch (error) {
    console.log("Error fetch data ", error);
  }
};

const getChallengeDays = async () => {
  try {
    const response = await axios.get("http://localhost:3000/challengeDays");
    const jsonData = response.data;
    const allChallenges = Object.values(jsonData).flat();
    challengeList.value = allChallenges;
  } catch (error) {
    console.log("Error fetch data", error);
  }
};

onMounted(() => {
  getPastChallengeList();
  getChallengeDays();
});

const editChallengeDay = ref({
  day: 1,
  status: true,
  memo: "날짜",
});
</script>
