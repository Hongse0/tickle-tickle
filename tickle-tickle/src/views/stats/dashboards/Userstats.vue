<script setup>
import { ref, computed } from 'vue';
import GradientLineChart from '../Charts/GradientLineChart.vue';
import AnalyticsCard from '../applications/components/AnalyticsCard.vue';

// JSON 데이터를 직접 정의
const chartData = ref({
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  datasets: [
    {
      data: [100, 200, 300, 50, 40, 300, 220, 500, 300, 400, 230, 500],
    },
  ],
});

// AnalyticsCard 데이터 정의
const analyticsData = ref([
  {
    category: '식비',
    views: 345,
  },
  {
    category: '생활',
    views: 520,
  },
  {
    category: '쇼핑',
    views: 122,
  },
  {
    category: '교통',
    views: 1220,
  },
  {
    category: '술/유흥',
    views: 13222,
  },
  {
    category: '교육',
    views: 122,
  },
]);

// views 값을 기준으로 상위 5개 데이터를 추출
const top5AnalyticsData = computed(() => {
  return [...analyticsData.value] // 원본 데이터 복사
    .sort((a, b) => b.views - a.views)  // 내림차순 정렬
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
              title="지출 카테고리 순위"
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
            <h1>dfdf</h1>
          </div>
          <div class="col-md-4">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
