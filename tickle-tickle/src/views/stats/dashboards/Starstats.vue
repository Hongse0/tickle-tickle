<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import BarChartHorizontal from '../applications/components/BarChartHorizontal.vue';
import ChannelsChartCard from '../applications/components/ChannelsChartCard.vue';

const chartLabels = ref([]);
const chartValues = ref([]);

// 데이터를 가져와서 차트를 업데이트하는 함수
const fetchChartData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/twenty");
    const jsonData = response.data;
    console.log(jsonData);

    chartLabels.value = Object.keys(jsonData); // 카테고리 레이블
    chartValues.value = Object.values(jsonData); // 각 카테고리의 값


    console.log(chartLabels.value);
    console.log(chartValues.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchChartData);
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
                datasets: {
                  label: '상세 정보', // 데이터 라벨
                  data: chartValues, // 각 카테고리의 값
                }
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
