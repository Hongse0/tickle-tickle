<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import GradientLineChart from '../stats/Charts/GradientLineChart2.vue';
import AnalyticsCard from '../stats/applications/components/AnalyticsCard2.vue';

// 차트 데이터 초기화
const chartData = ref({
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  datasets: [
    {
      data: [],
    },
  ],
});

const analyticsData = ref([]);

const userId = Number(localStorage.getItem("userId"));


// 데이터를 가져와서 차트를 업데이트하는 함수
const fetchChartData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/monthUse");
    const jsonData = response.data;
    console.log(jsonData);

    // userId가 1인 데이터를 필터링
    const filteredData = jsonData.filter(item => item.userId === userId);

    // chartData 업데이트 (각 월의 total 값을 사용)
    // chartData.value.datasets[0].data = filteredData.map(item => item.total);
    
    chartData.value = {
      ...chartData.value,
      datasets: [{
        data: filteredData.map(item => item.total)
      }]
    };

    console.log('chartData.value');
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
    const filteredData = jsonData.filter(item => item.userId === userId && item.year === '2024-06');

    // 각 카테고리의 total 값을 analyticsData에 업데이트
    analyticsData.value = filteredData.map(item => ({
      category: item.category,
      total: item.total,
    }));

    console.log(analyticsData.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// 컴포넌트가 마운트되면 데이터 가져오기
onMounted(() => {
  fetchChartData();
  fetchAnalyticsData();
});

// total 값을 기준으로 상위 5개 데이터를 추출
const top5AnalyticsData = computed(() => {
  return [...analyticsData.value] // 원본 데이터 복사
    .sort((a, b) => b.total - a.total)  // 내림차순 정렬
    .slice(0, 5);  // 상위 5개 데이터 추출
});
</script>

<template>
  <div>
  <br><br>
  <div class="container">
    <h1>홍세영님!</h1>
    <h1>안녕하세요</h1>
  </div>
  
  <br><br><br>
    <div class="container row justify-content-center d-flex">
      <!-- 연간 지출 그래프 쪽 -->
      <div class="container col-8 justify-content-center border border-dark">
        <!-- 연간 지출 그래프  -->
        <div class="card">
          <div class="card-body">
            <h1>연간 지출 그래프</h1>
            <gradient-line-chart
              id="chart-line"
              title="연간 지출 그래프"
              :chart="chartData"
            />

            <br />
            
          </div>
        </div>

        <br />
        <!-- 지출 카테고리 순위 -->
        <div class="card">
          <div class="card-body">
            <h1>지출 카테고리 순위</h1>
            <analytics-card
              title="월별 지출 카테고리 순위"
              :headers="['카테고리', '사용 금액']"
              :pages="top5AnalyticsData"
            />
            <br>
            
          </div>
        </div>
      </div>

      <!-- ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ -->
      <!-- 월별 수익 쪽  -->
      <div class="container col-4">
        <div class="card container">
          <div class="card-body">
            <h4>월별 수익</h4>
          </div>
        </div>

        <div class="card container">
          <div class="card-body">
            <h4>월별 지출</h4>
          </div>
        </div>

        <div class="card container">
          <div class="card-body">
            <h1>캘린더</h1>
          </div>
        </div>
      </div>
    </div>

    <br />
    <div class="container">
      <div class="card">
        <h1>이달의 챌린지</h1>
        <br /><br /><br /><br /><br />

        <hr class="border border-dark" />

        <br />

        <div>
          <h1>빅데이터 기반 티끌 카드 추천</h1>
        </div>
      </div>
    </div>
  </div>
</template>
