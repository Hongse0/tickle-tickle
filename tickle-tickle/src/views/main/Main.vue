<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import GradientLineChart from "../stats/Charts/GradientLineChart2.vue";
import AnalyticsCard from "../stats/applications/components/AnalyticsCard2.vue";
import Calendar from "../transaction/TransactionList.vue";

import MainChallenge from "./components/MainChallenge.vue";
import ArgonButton from "@/components/ArgonButton.vue";

import { useRouter } from "vue-router";
const router = useRouter();
const challenge = () => {
  router.push({ path: "/challenge/list" });
};

// 차트 데이터 초기화
const chartData = ref({
  labels: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  datasets: [
    {
      data: [],
    },
  ],
});

const analyticsData = ref([]);

const userId = Number(localStorage.getItem("userId"));
console.log(userId);

const loginUser = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    const users = response.data;

    // userId와 일치하는 사용자를 찾기
    const user = users.find((user) => user.userId === userId);

    console.log();
    if (user) {
      console.log(`User found: ${user.name}`);
      return user.name;
    } else {
      console.log("User not found");
      return null; // 사용자를 찾지 못한 경우 null 반환
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    return null; // 네트워크 오류 등으로 인한 처리
  }
};

// 데이터를 가져와서 차트를 업데이트하는 함수
const fetchChartData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/monthUse");
    const jsonData = response.data;
    console.log(jsonData);

    // userId가 1인 데이터를 필터링
    const filteredData = jsonData.filter((item) => item.userId === userId);

    // chartData 업데이트 (각 월의 total 값을 사용)
    // chartData.value.datasets[0].data = filteredData.map(item => item.total);

    chartData.value = {
      ...chartData.value,
      datasets: [
        {
          data: filteredData.map((item) => item.total),
        },
      ],
    };

    console.log("chartData.value");
    console.log(chartData.value);

    console.log(chartData.value.datasets[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchAnalyticsData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/stats");
    const jsonData = response.data;
    console.log(jsonData);

    // userId가 1인 데이터 필터링
    const filteredData = jsonData.filter(
      (item) => item.userId === userId && item.year === "2024-06"
    );

    // 각 카테고리의 total 값을 analyticsData에 업데이트
    analyticsData.value = filteredData.map((item) => ({
      category: item.category,
      total: item.total,
    }));

    console.log(analyticsData.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// axios를 사용하여 TransactionList.vue에서 계산한 incomeTotal 가져오기
const fetchTransactionIncomeTotal = async () => {
  try {
    const response = await axios.get("http://localhost:3000/transactions");
    if (response.data && response.data.length > 0) {
      transactions.value = response.data; // 가져온 데이터를 transactions에 할당합니다.
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
};

// 컴포넌트가 마운트되면 데이터 가져오기
onMounted(async () => {
  const userName = await loginUser(); // 사용자 정보 가져오기

  if (userName) {
    greeting.value = `${userName}님! 안녕하세요`;
  } else {
    greeting.value = "사용자를 찾을 수 없습니다."; // 사용자를 찾지 못한 경우 처리
  }

  fetchChartData();
  fetchAnalyticsData();
  fetchTransactionIncomeTotal();
});

const transactions = ref([]);

const incomeTotal = computed(() => {
  return transactions.value.reduce((total, transaction) => {
    if (transaction.isIncome) {
      return total + parseInt(transaction.cost);
    }

    return total;
  }, 0);
});

const expendTotal = computed(() => {
  return transactions.value.reduce((total, transaction) => {
    if (!transaction.isIncome) {
      return total + parseInt(transaction.cost);
    }

    return total;
  }, 0);
});

let greeting = ref("로딩 중...");

// total 값을 기준으로 상위 5개 데이터를 추출
const top5AnalyticsData = computed(() => {
  return [...analyticsData.value] // 원본 데이터 복사
    .sort((a, b) => b.total - a.total) // 내림차순 정렬
    .slice(0, 5); // 상위 5개 데이터 추출
});
</script>

<template>
  <div>
    <br /><br />
    <div class="container">
      <h4 style="color: white">{{ greeting }}</h4>
      <!-- <h5>안녕하세요</h5> -->
    </div>

    <br />
    <div class="container row justify-content-center d-flex">
      <!-- 연간 지출 그래프 쪽 -->
      <div class="container col-8 justify-content-center border border-dark">
        <!-- 연간 지출 그래프  -->

        <gradient-line-chart
          id="chart-line"
          title="연간 지출 그래프"
          :chart="chartData"
        />

        <br />

        <br />
        <!-- 지출 카테고리 순위 -->

        <analytics-card
          title="월별 지출 카테고리 순위"
          :headers="['카테고리', '사용 금액']"
          :pages="top5AnalyticsData"
        />
        <br />
      </div>

      <!-- ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ -->
      <!-- 월별 수익 쪽  -->
      <div class="container col-4">
        <div class="card container mb-3">
          <div class="card-body text-center mt-3">
            <div class="float-start ps-3">
              <h4>월별 수익</h4>
              <p class="card-description mb-4">{{ incomeTotal }} 원</p>
            </div>

            <img
              src="../../assets/img/transIncome.png"
              class="img-fluid border-radius-lg float-end px-3"
            />
          </div>
        </div>

        <div class="card container mb-3">
          <div class="card-body text-center mt-3">
            <div class="float-start ps-3">
              <h4>월별 지출</h4>
              <p class="card-description mb-4">{{ expendTotal }} 원</p>
            </div>

            <img
              src="../../assets/img/transExpend.png"
              class="img-fluid border-radius-lg float-end px-3"
            />
          </div>
        </div>

        <div class="card container">
          <div class="card-body text-center mt-3 p-0">
            <h4 class="text-center">캘린더</h4>
            <calendar id="calendar-table" class="p-0 mb-3" />
          </div>
        </div>
      </div>
    </div>

    <br />
    <div class="container">
      <div class="card">
        <div class="row mx-5 mt-4 justify-content-center">
          <div class="col-md-6" @click="challenge()">
            <div class="card h-100">
              <div class="card-body pb-0 px-3">
                <h3 class="ps-2 mb-0 text-center">이달의 챌린지</h3>
                <MainChallenge></MainChallenge>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h3 class="mb-0" style="color: #5d12d2">
                    🔥 현재 20대에게 인기있는 챌린지
                  </h3>
                </div>
              </div>
              <div class="p-3 card-body">
                <div class="row align-items-center">
                  <div class="text-start col ms-2">
                    <div
                      class="mx-5"
                      style="
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                      "
                    >
                      <h2 style="color: #5d12d2">1. 노카페인 챌린지</h2>
                      <argon-button style="height: 40px">Add</argon-button>
                    </div>
                    <hr class="mt-1 mb-3 horizontal dark" />
                    <div
                      class="mx-5"
                      style="
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                      "
                    >
                      <h3 style="color: #b931fc">2. 대중교통 챌린지</h3>
                      <argon-button style="height: 40px">Add</argon-button>
                    </div>
                    <hr class="mt-1 mb-3 horizontal dark" />
                    <div
                      class="mx-5"
                      style="
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                      "
                    >
                      <h4 style="color: #ff6ac2">3. 집밥 챌린지 챌린지</h4>
                      <argon-button style="height: 40px">Add</argon-button>
                    </div>
                    <hr class="mt-1 mb-3 horizontal dark" />
                    <div
                      class="mx-5"
                      style="
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                      "
                    >
                      <h4 style="color: #ff6ac2">4. 금연 챌린지</h4>
                      <argon-button style="height: 40px">Add</argon-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-3 horizontal dark" />

        <br />
        <div>
          <h1>빅데이터 기반 티끌 카드 추천</h1>
        </div>
      </div>
    </div>
  </div>
</template>
