<script setup>
import GradientLineChart from '../Charts/GradientLineChart.vue';
import { ref } from 'vue';
// import MiniStatisticsCard from '../Cards/MiniStatisticsCard.vue';


const chartData = ref({
  labels: ['1월','2월','3월','4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  datasets: [
    {      
      data: [100,200,300, 50, 40, 300, 220, 500, 300, 400, 230, 500],
    },
  ],
});



</script>

<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-12 col-md-6 col-12">
            <!-- <mini-statistics-card
              
            /> -->
          </div>

          
        </div>

        

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
