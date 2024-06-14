<template>
  <div class="container">
    <br />

    <!-- card -->
    <div class="card col-lg-11 container justify-content-center">
      <div class="row d-flex">
        <!-- 카드  -->

        <!-- Card header -->
        <div class=" card-header col-8">
          <div class="text-center">
            <h2 class="mb-0 mt-3">{{ currentChallenge.challengeName }}</h2>
          </div>

          <div class="card-body">
            <!-- 28개 컴포넌트 -->
            <div>
              <MonthChallenge class="mb-4"> </MonthChallenge>
              <br />
              <!-- 입력창 -->
              <div class="card p-4 ms-4 ps-5" style="width: 80%">
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
      <div  class="p-6 pt-0">
        <AuthorsTable
          style="width: 100%;"
          :challengeList="challengeList"
        >
        </AuthorsTable>
        <br />
      </div>
    </div>
  </div>

  <!-- 여기부터 모달입니다 끗까지 -->
  <div id="modal">
    <!-- <button @click="openModal">Open Modal</button> -->
    <Modal :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event">
      <h1>{{ currentChallenge.challengeName }}</h1>
      <hr class="my-3 horizontal dark" />
      <div class="row">
        <div class="mx-auto col-lg-9 col-12">
          <form v-on:submit.prevent="submitForm">
            <div class="col">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">성공여부</h5>
                <span class="text-end">{{ ch }}일째 챌린지 성공중</span>
              </div>
            </div>
            <div class="row my-3">
              <div class="col-auto">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="income"
                    v-model="sf"
                    value="income"
                  />
                  <label class="form-check-label" for="income">Success</label>
                </div>
              </div>
              <div class="col-auto">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="expend"
                    v-model="sf"
                    value="expend"
                  />
                  <label class="form-check-label" for="expend">Fail</label>
                </div>
              </div>
            </div>

            <label class="my-3">메모</label>

            <input
              v-model="inputMemo"
              id="inputMemo"
              type="text"
              class="form-control mb-3"
              style="height: 100px"
            />
          </form>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

import AuthorsTable from "./components/MonthChallengeItem.vue";
import PastChallengeSideBar from "./components/PastChallengeSideBar.vue";
import EditChallenge from "./components/EditChallenge.vue";
import MonthChallenge from "./components/MonthChallenge.vue";

import axios from "axios";

import Modal from "./components/Modal.vue"; //모달
const isModalOpen = ref(false); //모달

const challengeList = ref([]);
const pastChallengeList = ref([]);
const currentChallenge = ref({});

const getPastChallengeList = async () => {
  try {
    const response = await axios.get("http://localhost:3000/challenge");
    currentChallenge.value = response.data[0];
    const jsonData = response.data.slice(1, 4);

    pastChallengeList.value = jsonData;
  } catch (error) {
    console.log("Error fetch data ", error);
  }
};

const getChallengeDays = async () => {
  try {
    const response = await axios.get("http://localhost:3000/challengeDays");
    const jsonData = response.data;
    const filteredData = jsonData.filter((item) => item.challengeId === 1);
    // alert(filteredData.length);
    const allChallenges = Object.values(filteredData).flat();
    challengeList.value = allChallenges;
  } catch (error) {
    console.log("Error fetch data", error);
  }
};

onMounted(() => {
  getPastChallengeList();
  getChallengeDays();
  isModalOpen.value = true; //진입시 모달창 팝업
});

const editChallengeDay = ref({
  day: 1,
  status: true,
  memo: "날짜",
});
</script>

<style scoped>
/*모달 스타일 */
#modal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
