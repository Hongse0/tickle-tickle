<script setup>
import { ref, computed } from 'vue';
import AnalyticsCard from '../applications/components/AnalyticsCard.vue';
import BarChartHorizontal from '../applications/components/BarChartHorizontal.vue';


const chartData = {
  "쇼핑": 4,
  "교육": 46,
  "식비": 84,
  "생활": 35,
  "술/유흥": 17,
  "기타": 30,
};

const chartLabels = Object.keys(chartData); // 카테고리 레이블
const chartValues = Object.values(chartData); // 각 카테고리의 값

// BarChartHorizontal에 전달할 데이터 구조
const chartDataset = {
  label: '상세 정보', // 데이터 라벨
  data: chartValues, // 각 카테고리의 값
};

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
          <div class="col-lg-12 mb-lg">
            <bar-chart-horizontal
                title="비슷한 수입의 사용자들의 자금 사용처"
                :chart="{
                    labels: chartLabels, // 카테고리 레이블
                    datasets: chartDataset, // 데이터셋
                }"
            />
          </div>
        </div>
        <br><br>
        <div class="row">
          <div class="col-lg-12 col-md-6 col-12">
            <analytics-card
              title="지출 카테고리 순위"
              :headers="['카테고리', '사용 금액']"
              :pages="top5AnalyticsData"
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
