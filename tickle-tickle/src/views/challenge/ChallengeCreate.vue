<template>
  <div class="card col-lg-11 container justify-content-center">
    <div class="row d-flex">
      <!-- Card header -->
      <div class="card-header">
        <div class="text-center">
          <h2 class="mb-0">챌린지 생성</h2>
        </div>
        <div class="text-center">
          <p class="mb-0 text-sm">
            나만의 챌린지를 만들어보세요!
          </p>
        </div>
        <hr class="my-3 horizontal dark" />
      </div>

      <div class="row">
        <div class="col-8">
          <label for="challengeName" class="form-label">나만의 챌린지 이름</label>
          <input id="projectName" type="text" class="form-control" v-model="challengeName" />
          <label class="mt-2 form-label">챌린지 태그</label>
          <div class="col-12">
            <select id="choices-category-edit" class="form-control" name="choices-category" v-model="challengeTag">
              <option value="Choice 1" selected>노카페인 챌린지</option>
              <option value="Choice 2">대중교통 챌린지</option>
              <option value="Choice 3">집밥 챌린지</option>
              <option value="Choice 4">금연 챌린지</option>
            </select>
            <div class="row">
              <div class="col-6">
                <label class="form-label">챌린지 시작일</label>
                <flat-pickr v-model="startDate" class="form-control datetimepicker"
                  placeholder="Please select start date" :config="config"></flat-pickr>
              </div>
              <div class="col-6">
                <label class="form-label">챌린지 종료일</label>
                <flat-pickr v-model="endDate" class="form-control datetimepicker" placeholder="Please select end date"
                  :config="config"></flat-pickr>
              </div>
            </div>
          </div>
        </div>
        <complex-background-card
          image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/window-desk.jpg"
          description="AI추천 챌린지" :action="{ route: 'https://chatgpt.com/', label: 'Read more' }" />
        <div class="card-body p-3">
          <div class="row d-flex justify-content-center">
            <outlined-counter-card :duration="2500" prefix="$" :count="10000" title="이정도 금액을 아낄 수 있어요" />
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <button type="button" name="button" class="m-0 btn btn-light">
            Cancel
          </button>
          <router-link to="/challenge/list">
            <button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2" @click="createChallenge">
              Create Project
            </button></router-link>
        </div>
      </div>
      <hr class="my-3 horizontal dark" />
      <div class="mt-4">
        <div class="container">
          <div class="tab-content tab-space">
            <div id="monthly" class="tab-pane active">
              <div class="row">

                <div class="mb-4 col-lg-4 mb-lg-0" v-for="(challenge, index) in pastChallenges" :key="index">
                  <div class="card">
                    <div class="pt-4 pb-3 text-center card-header">
                      <span class="text-uppercase font-weight-bold text-dark">PastChallenge</span>
                    </div>
                    <div class="pt-0 text-center card-body text-lg-start">
                      <div class="p-2 d-flex justify-content-lg-start justify-content-center">

                        <div>
                          <span class="ps-3">
                            <ul>
                              Tag :{{ challenge.pastTag }}
                            </ul>
                            <ul>
                              Start Date :{{ challenge.pastStartDate }}
                            </ul>
                            <ul>
                              End Date :{{ challenge.pastEndDate }}
                            </ul>
                            <ul>
                              Save Money : ${{ challenge.pastMoney }}
                            </ul>
                          </span>
                        </div>
                      </div>
                      <a class="mt-3 mb-0 btn btn-icon d-lg-block" href="http://localhost:8080/challenge/list">
                        Go to Past Challenge
                        <i class="fas fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<script setup>
import {onMounted, ref} from "vue"
import flatPickr from "vue-flatpickr-component";
import OutlinedCounterCard from "./components/OutlinedCounterCard.vue"
import ComplexBackgroundCard from "./components/ComplexBackgroundCard.vue";;
import axios from "axios"
import { useRouter } from 'vue-router';
const router = useRouter();


// const openModal = () => {
//   isModalOpen.value = true;
// };
// const result = await getData();


const challengeName = ref(""); // 챌린지 이름 설정
const challengeTag = ref(""); // 챌린지 카테고리 선택
const startDate = ref(""); //시작날짜
const endDate = ref(""); // 마감날짜
const pastChallenges = ref();
const fetchPastChallenges = async () => {
  try {
    const response = await axios.get('http://localhost:3000/pastChallenge');
    pastChallenges.value = response.data;
    // alert(pastChallenges.value);
  } catch (error) {
    console.error('Error fetching past challenges:', error);
  }
};

onMounted(() => {
  fetchPastChallenges();
  fetchData();
});


const config = {
allowInput: true,
onDayCreate: (dObj, dStr, fp, dayElem) => {
    // 오늘 날짜에서 "today" 클래스 제거
    if (dayElem.classList.contains("today")) {
      dayElem.classList.remove("today");
    }
  }
};
const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/challenge");
    const jsonData = response.data;
    console.log(jsonData);
  }
  catch (error) {
    console.error(error)
  }
};

const createChallenge = async () => {
  const data = {
    challengeName: challengeName.value,
    challengeTag: challengeTag.value,
    startDate: startDate.value,
    endDate: endDate.value,
    userId: 1,
  };

  console.log(data)
  
  try {
    await axios.post("http://localhost:3000/challenge", data);
    console.log("Challenge created successfully!")
    await router.push('/challenge/list');
  } catch (error) {
    console.error("Error creating challenge:", error);
  }
}

</script>
