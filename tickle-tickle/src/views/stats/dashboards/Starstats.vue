<script setup>
import BarChartHorizontal from '../applications/components/BarChartHorizontal.vue';
import ChannelsChartCard from '../applications/components/ChannelsChartCard.vue';

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



</script>

<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        
        <div class="row">
          <div class="col-lg-12 mb-lg">
            <bar-chart-horizontal
                
                :chart="{
                    labels: chartLabels, // 카테고리 레이블
                    datasets: chartDataset, // 데이터셋
                }"
            />
          </div>
        </div>
        <br><br>
        <div class="row">
          <div class="col-lg-12 mb-lg">
            <channels-chart-card />
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>
