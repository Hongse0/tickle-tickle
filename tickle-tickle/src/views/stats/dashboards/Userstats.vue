<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import GradientLineChart from '../Charts/GradientLineChart.vue';
import AnalyticsCard from '../applications/components/AnalyticsCard.vue';

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

// 데이터를 가져와서 차트를 업데이트하는 함수
const fetchChartData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/monthUse");
    const jsonData = response.data;
    console.log(jsonData);

    // userId가 1인 데이터를 필터링
    const filteredData = jsonData.filter(item => item.userId === 1);

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
    const filteredData = jsonData.filter(item => item.userId === 1 && item.year === '2024-06');

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
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-12 col-md-6 col-12">
            <analytics-card
              title="월별 지출 카테고리 순위"
              :headers="['카테고리', '사용 금액']"
              :pages="top5AnalyticsData"
            />
          </div>
        </div>
        
        <br><br>
        <div class="row">
          <div class="col-lg-12 mb-lg">
            <gradient-line-chart
              id="chart-line"
              title="연간 지출 그래프"
              :chart="chartData"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-md-8 mb-4 mb-md-0">
            
          </div>
          <div class="col-md-4">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
